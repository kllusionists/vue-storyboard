<template>
  <a-modal
    class="library"
    mask-closable
    dialog-class="components-library"
    width="33%"
    :after-close="
      () => {
        componentName = ''
      }
    "
    :mask="false"
    :mask-style="{ backgroundColor: 'transparent' }"
    :dialog-style="{ top: '200px' }"
    :body-style="{ backgroundColor: 'transparent', padding: '0' }"
    :destroy-on-close="true"
    :closable="false"
    :footer="null"
    :visible="visible"
    @cancel="onClose"
  >
    <div class="library-content">
      <div class="flex-justify-flex-start align-center search-field">
        <img src="../../../assets/imgs/filter.png" class="search-filter-icon" />
        <input v-model="componentName" placeholder="组件名称" type="text" class="search-input" />
      </div>
      <div class="flex-justify-center align-center compontent-type">
        <img
          @click="onSwitchCommonComponents"
          title="Native Dom"
          style="height: 17px"
          src="../../../assets/imgs/html5.png"
        />
        <img
          @click="onSwitchAntComponents"
          title="Ant Design Vue"
          src="../../../assets/imgs/ant-design-icon.svg"
        />
      </div>
      <div class="flex-justify-flex-start align-center component-content">
        <div class="component-list">
          <div
            v-for="component in components"
            :draggable="selectedComponent === component"
            @dragstart="(event) => onDragStart(event, component)"
            :key="component.id"
            class="component-item flex-justify-flex-start align-center"
            :class="{ 'component-selected': component.name === selectedComponent.name }"
            @click="
              () => {
                selectedComponent = component
              }
            "
          >
            <div class="component-item-example">img</div>
            <div class="component-item-title">{{ component.name }}</div>
          </div>
        </div>
        <div class="component-desc">
          {{ selectedComponent.description }}
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import commonComponents from './components/common.components'
import antComponents from './components/ant-design-vue.components'

export default {
  name: 'Components-Library',
  components: {},
  props: {},
  data() {
    return {
      visible: false,
      componentName: '',

      commonComponents,
      antComponents,

      components: commonComponents,
      selectedComponent: commonComponents[0]
    }
  },
  created() {},
  methods: {
    onOpen() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    onSwitchCommonComponents() {
      this.components = this.commonComponents
      this.selectedComponent = this.components[0]
    },
    onSwitchAntComponents() {
      this.components = this.antComponents
      this.selectedComponent = this.components[0]
    },
    onDragStart(event, component) {
      event.dataTransfer.setData('text/plain', component.id)
      this.visible = false
    }
  },
  computed: {}
}
</script>
<style lang="scss">
  .components-library {
    .ant-modal-content {
      border-radius: 10px;
      background-color: transparent;
    }

    .library-content {
      overflow: hidden;
      z-index: 1;
      max-height: 480px;
      min-height: 320px;
      height: 50vh;
    }
    .library-content::after {
      margin: -10px;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(227, 230, 231, 0.9);
      z-index: -1;
      -webkit-filter: blur(8px);
      -moz-filter: blur(8px);
      -ms-filter: blur(8px);
      -o-filter: blur(8px);
      filter: blur(8px);
    }

    .search-field {
      padding: 0 10px;
      border-bottom: 0.55px solid #d3d3d3;
    }
    .search-filter-icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }
    .search-input {
      flex-grow: 1;
      margin-left: 10px;
      height: 40px;
      background-color: transparent;
      border: none;
      outline: none;
    }
    .search-input::-webkit-input-placeholder {
      color: rgba(117, 117, 117, 0.7);
    }
    .compontent-type {
      height: 30px;
      border-bottom: 0.55px solid #d3d3d3;
    }
    .compontent-type img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .compontent-type img + img {
      margin-left: 20px;
    }

    .component-content {
      height: calc(100% - 71px);
    }
    .component-list {
      flex-shrink: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      width: 40%;
      min-width: 200px;
      user-select: none;
    }
    .component-item {
      height: 46px;
      line-height: 46px;
      position: relative;
      cursor: pointer;
      z-index: 1;
    }
    .component-item-example {
      width: 50px;
      font-size: 12px;
      text-align: center;
      flex-shrink: 0;
    }
    .component-selected::after {
      content: '';
      margin: 4px 6px;
      border-radius: 6px;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(187, 211, 236, 0.9);
    }
    .component-item-title {
      font-weight: 500;
      flex-grow: 1;
    }
    .component-desc {
      flex-grow: 1;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      border-left: 0.55px solid #d3d3d3;
    }
  }
</style>
