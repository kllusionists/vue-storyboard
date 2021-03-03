<template>
  <div class="component-shape flex">
    <div
      :class="{ chosen: chosen }"
      :style="{ width: `${availableScreenWidth}px` }"
      @mousedown="componentDwon"
      @mouseup="componentUp"
      @mousemove.passive="componentMove"
    >
      <div
        class="shape-point"
        v-for="(point, index) in chosen && resizeable ? pointList : []"
        :key="index"
        :style="genPointStyle(point)"
        @mousedown="onMouseDownOnPoint(point, $event)"
      ></div>
      <slot ref="slot"></slot>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import { getAvailableScreenWidth } from '../../../utils/index'

export default {
  name: 'Component-Shape',
  props: {
    component: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      availableScreenWidth: getAvailableScreenWidth(),
      elm: null,
      // 八个方向
      // '1101', '0001', '0101',
      // '1100',         '0100',
      // '1111', '0011', '0111'
      pointList: ['1101', '0001', '0101', '1100', '0100', '1111', '0011', '0111'],
      // 每个点对应的光标
      cursors: {
        1101: 'nw-resize',
        '0001': 'n-resize',
        '0101': 'ne-resize',
        1100: 'w-resize',
        '0100': 'e-resize',
        1111: 'sw-resize',
        '0011': 's-resize',
        '0111': 'se-resize'
      }
    }
  },
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.elm = this.$slots.default[0].elm
    })
  },
  methods: {
    componentDwon(event) {
      event.preventDefault()
      event.stopPropagation()

      this.$emit('down', event)
      // TODO 组件相关操作

      this.$store.commit('setChosenComponent', this.component)
    },
    componentUp(event) {
      this.$emit('up', event)
    },
    componentMove(event) {
      this.$emit('move', event)
    },
    genPointStyle(point) {
      this.elm = this.$slots.default[0].elm
      console.log(this.$refs)
      const width = this.elm.offsetWidth
      const height = this.elm.offsetHeight

      const top = /..01/.test(point)
      const bottom = /..11/.test(point)
      const right = /01../.test(point)
      const left = /11../.test(point)

      let pLeft = 0
      let pTop = 0

      if (/.1.1/.test(point)) {
        pLeft = left ? 0 : width
        pTop = top ? 0 : height
      } else if (top || bottom) {
        pLeft = width / 2
        pTop = top ? 0 : height
      } else if (left || right) {
        pLeft = left ? 0 : width
        pTop = height / 2
      }

      const style = {
        marginLeft: '-4px',
        marginTop: '-4px',
        left: `${pLeft}px`,
        top: `${pTop}px`,
        cursor: this.cursors[point]
      }
      return style
    },
    onMouseDownOnPoint(point, e) {
      e.stopPropagation()
      e.preventDefault()

      const chosenComponent = _.cloneDeep(this.chosenComponent)
      const clickPosition = { x: e.clientX, y: e.clientY }
      const originalPostion = {
        width: chosenComponent.style.width,
        height: chosenComponent.style.height
      }

      let isFirst = true
      const move = (moveEvent) => {
        const prePosition = {
          x: moveEvent.clientX - clickPosition.x,
          y: moveEvent.clientY - clickPosition.y
        }
        // 第一次点击时也会触发 move，所以会有“刚点击组件但未移动，组件的大小却改变了”的情况发生
        // 因此第一次点击时不触发 move 事件
        if (isFirst) {
          isFirst = false
          return
        }

        chosenComponent.style.width = originalPostion.width + prePosition.x
        chosenComponent.style.height = originalPostion.height + prePosition.y
        this.$store.commit('setChosenComponent', chosenComponent)
      }

      const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    }
  },
  computed: {
    ...mapGetters(['chosenComponent']),
    chosen() {
      return this.component.id === this.chosenComponent.id
    },
    resizeable() {
      return this.chosenComponent.resize
    }
  }
}
</script>
<style lang="scss" scoped>
  .component-shape {
    position: relative;
    // display: contents;
  }
  .chosen {
    outline: 1px solid rgb(117, 193, 252);
    user-select: none;
  }
  .shape-point {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgb(117, 193, 252);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 10;
  }
</style>
