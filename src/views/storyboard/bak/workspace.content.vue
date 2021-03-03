<template>
  <div
    class="workspace-content-component"
    ref="wcp"
    style="transform-origin: top left; -webkit-transform-origin: top left"
    :style="{
      width: `${rule.split * (rule.pixel + 10)}px`,
      height: `${rule.split * (rule.pixel + 10)}px`,
      top: `${wcpPosition.top}px`,
      left: `${wcpPosition.left}px`,
      cursor: mouseClicked ? 'move' : 'pointer',
      transform: `scale(${rule.scaleRatio}, ${rule.scaleRatio})`,
      transition: 'transform 0.3s'
    }"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mousemove.passive="onMouseOver"
    @drop="onDrop"
    @dragover="onDragOver"
  >
    <div
      class="vertical-rule flex flex-direction-col"
      :style="{
        height: `${rule.split * (rule.pixel + 10)}px`,
        left: `${-wcpPosition.left / rule.scaleRatio}px`
      }"
    >
      <template v-for="(h, index) in rule.split">
        <div
          :key="index"
          :style="{
            marginTop: index === 0 ? `10px` : `${rule.pixel}px`,
            marginLeft: '0px'
          }"
          style="height: 10px; width: 10px; position: relative; text-align: center; flex-shrink: 0"
        >
          <div
            :style="{
              width: `${rule.split * (rule.pixel + 10)}px`,
              height: '1px',
              background: '#fff',
              position: 'absolute',
              top: '7px',
              left: '-10px'
            }"
          ></div>
          <div style="position: absolute">{{ index === 0 ? '' : (h - 1) * rule.pixel + 10 }}</div>
        </div>
      </template>
    </div>
    <div
      class="horizontal-rule flex"
      :style="{
        width: `${rule.split * (rule.pixel + 10)}px`,
        top: `${-wcpPosition.top / rule.scaleRatio}px`
      }"
    >
      <template v-for="(w, index) in rule.split">
        <div
          :key="index"
          :style="{
            marginLeft: index === 0 ? `10px` : `${rule.pixel}px`,
            marginTop: '0px'
          }"
          style="height: 10px; width: 10px; position: relative; text-align: center; flex-shrink: 0"
        >
          <div
            :style="{
              height: `${rule.split * (rule.pixel + 10)}px`,
              width: '1px',
              background: '#fff',
              position: 'absolute',
              top: '-10px',
              left: '5px'
            }"
          ></div>
          <div style="position: absolute">{{ index === 0 ? 10 : (w - 1) * rule.pixel + 10 }}</div>
        </div>
      </template>
    </div>
    <div
      class="content"
      :style="{
        width: `${rule.split * (rule.pixel + 10)}px`,
        height: `${rule.split * (rule.pixel + 10)}px`
      }"
    >
      <div style="padding: 17px 16px" :style="{ width: `${availableScreenWidth}px` }">
        <template v-for="component in componentTree">
          <!-- <componet-shape
            v-if="component.id === chosenComponent.id"
            :key="component.id"
            :component="component"
            @down="componentDwon"
            @up="componentUp"
            @move.passive="componentMove"
          >
            <component-builder :key="component.id" :component="component">
              {{ component.value }}
            </component-builder>
          </componet-shape> v-else-->
          <component-builder :key="component.id" :component="component">
            {{ component.value }}
          </component-builder>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import commonComponents from './components/common.components'
import antComponents from './components/ant-design-vue.components'
import { isEmpty, isNull, guidHash, getAvailableScreenWidth } from '../../../utils/index'
import { mapGetters } from 'vuex'
// import ComponetShape from './component.shape'
import ComponentBuilder from './component.builder'

export default {
  name: 'Workspace-Content',
  props: {
    sideHidden: {
      type: Boolean,
      default: false
    },
    rightSideHidden: {
      type: Boolean,
      default: false
    },
    footerHidden: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      availableScreenWidth: getAvailableScreenWidth(),
      wcpPosition: {
        top: 0,
        left: 0
      },
      rule: {
        split: 100,
        pixel: 50,
        scaleRatio: 1
      },
      mouseClicked: false,
      mousePosition: {
        x: 0,
        y: 0
      },
      componentClicked: false,
      timer: null
    }
  },
  components: {
    // ComponetShape,
    ComponentBuilder
  },
  created() {},
  mounted() {},
  methods: {
    onMouseDown(event) {
      if (!this.componentClicked) {
        this.mouseClicked = true
        this.mousePosition = { x: event.layerX - 16, y: event.layerY - 16 }

        // 解除组件选中状态
        this.$store.commit('setChosenComponent', {})
      }
    },
    onMouseUp(event) {
      this.mouseClicked = false
      this.mousePosition = { x: 0, y: 0 }

      if (this.wcpPosition.top > 0) {
        this.wcpPosition.top = 0
      }
      if (this.wcpPosition.left > 0) {
        this.wcpPosition.left = 0
      }

      // TODO 当缩放比例大于1的时候，右侧及底部吸附功能异常
      const top = this.footerHidden
        ? -(this.rule.split * this.rule.pixel + 350)
        : -(this.rule.split * this.rule.pixel + 550)
      if (this.wcpPosition.top < top) {
        this.wcpPosition.top = top
      }
      const left = this.rightSideHidden
        ? this.sideHidden
          ? -(this.rule.split * this.rule.pixel - 490)
          : -(this.rule.split * this.rule.pixel - 190)
        : -(this.rule.split * this.rule.pixel + 110)
      if (this.wcpPosition.left < left) {
        this.wcpPosition.left = left
      }
    },
    onMouseOver(event) {
      if (this.mouseClicked) {
        // console.log(this.$refs.wcp.getBoundingClientRect())
        const dealteX = event.layerX - 16 - this.mousePosition.x
        const dealteY = event.layerY - 16 - this.mousePosition.y
        this.wcpPosition.top += dealteY
        this.wcpPosition.left += dealteX
      }
    },
    onZoom(ratio) {
      this.rule.scaleRatio = ratio
      this.mouseClicked = false
      this.mousePosition = { x: 0, y: 0 }
    },
    resetPosition() {
      this.mouseClicked = false
      this.mousePosition = { x: 0, y: 0 }
      this.wcpPosition.top = 0
      this.wcpPosition.left = 0
    },
    componentDwon(event) {
      this.componentClicked = true
    },
    componentUp(event) {
      this.componentClicked = false
    },
    componentMove(event) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.componentClicked = false
      }, 200)
    },
    onDrop(event) {
      event.preventDefault()
      const data = event.dataTransfer.getData('text')

      if (!isEmpty(data)) {
        const componentTree = _.cloneDeep(this.componentTree)
        console.log(commonComponents)
        const filter0 = commonComponents.filter((component) => {
          return component.id === data
        })
        console.log(antComponents)
        const filter1 = antComponents.filter((component) => {
          return component.id === data
        })
        const filter = [...filter0, ...filter1]
        if (!isNull(filter) && filter.length > 0) {
          const component = _.cloneDeep(filter[0])
          component.id += `-${guidHash()}`
          componentTree.push(component)
          this.$store.commit('setComponentTree', componentTree)
        } else {
          this.$message.warning('组件异常!')
        }
      } else {
        this.$message.warning('组件异常!')
      }
    },
    onDragOver(event) {
      event.preventDefault()
    }
  },
  computed: {
    ...mapGetters(['componentTree', 'chosenComponent'])
  }
}
</script>
<style lang="scss" scoped>
  .workspace-content-component {
    position: absolute;
    background-color: #f2f2f2;
    min-height: 100%;
    min-width: 100%;
    z-index: 10;
  }
  .horizontal-rule {
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    font-size: 10px;
    color: #ccc;
    z-index: 9;
  }
  .vertical-rule {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    font-size: 10px;
    color: #ccc;
    z-index: 10;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
</style>
