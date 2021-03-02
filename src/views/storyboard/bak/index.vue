<template>
  <div class="workspace" :class="{ dragging: dragging }">
    <a-layout class="workspace-layout">
      <a-layout>
        <a-layout-header class="workspace-header">
          <a-row type="flex" justify="space-between" align="middle" class="workspace-header-tools">
            <a-col :span="20"> header </a-col>
            <a-col :span="4" class="flex-justify-flex-end align-center">
              <a-icon
                type="plus"
                title="组件库"
                class="toolbar-icon"
                style="font-size: 15px; margin-right: 10px; cursor: pointer"
                @click="onOpenLibrary"
              />
              <div
                :title="rightSideHidden ? '打开右侧边栏' : '隐藏右侧边栏'"
                class="toolbar-icon toolbar-icon-right-side cursor-pointer"
                :style="{ backgroundPosition: `${rightSideHidden ? '-16' : '0'}px 0px` }"
                @click="rightSideHidden = !rightSideHidden"
              ></div>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout-content class="flex-justify-flex-start workspace-layout-content">
          <div
            v-show="!sideHidden"
            class="workspace-content-side"
            :style="{
              flex: `0 0 ${contentSideWidth}px`,
              maxWidth: `${contentSideWidth}px`,
              minWidth: `${contentSideWidth}px`,
              width: `${contentSideWidth}px`
            }"
          >
            <components-tree></components-tree>
            <vue-draggable-resizable
              :style="{ transform: `translate(${contentSideWidth - contentSideOffset}px, 0px)` }"
              class="workspace-content-side-draggable"
              key="workspace-content-side-draggable"
              :w="4"
              :x="contentSideWidth - contentSideOffset"
              axis="x"
              :draggable="true"
              :resizable="false"
              @dragging="onSideDrag"
              @dragstop="onSideDragstop"
            ></vue-draggable-resizable>
          </div>
          <div class="workspace-content" :class="{ 'hidden-left-border': sideHidden }">
            <workspace-content
              ref="wc"
              :side-hidden="sideHidden"
              :right-side-hidden="rightSideHidden"
              :footer-hidden="footerHidden"
            ></workspace-content>
            <a-row
              type="flex"
              justify="space-between"
              align="middle"
              class="workspace-content-tools"
            >
              <a-col :span="6" class="flex" style="min-width: 130px">
                <div
                  :title="sideHidden ? '打开侧边栏' : '隐藏侧边栏'"
                  class="toolbar-icon toolbar-icon-side cursor-pointer"
                  :style="{ backgroundPosition: `${sideHidden ? '-16' : '0'}px 0px` }"
                  @click="sideHidden = !sideHidden"
                ></div>
                <div
                  :title="footerHidden ? '打开底边栏' : '隐藏底边栏'"
                  :style="{ backgroundPosition: `${footerHidden ? '-16' : '0'}px 0px` }"
                  class="toolbar-icon toolbar-icon-footer cursor-pointer"
                  style="margin-left: 10px"
                  @click="footerHidden = !footerHidden"
                ></div>
              </a-col>
              <a-col :span="12" style="text-align: center; max-width: calc(100% - 260px)">
                <!-- TODO 完善底部工具栏 -->
                <!-- tool bar -->
              </a-col>
              <a-col :span="6" style="text-align: right; user-select: none; min-width: 130px">
                <img
                  alt="缩小工作区"
                  title="缩小工作区"
                  src="../../../assets/imgs/zoom-down.png"
                  class="cursor-pointer toolbar-icon"
                  @click="onZoomDown"
                />
                <span
                  title="恢复工作区"
                  style="margin-left: 10px"
                  :style="{ padding: `0 ${zoomLevel < 100 ? 4 : 0}px` }"
                  class="cursor-pointer"
                  @dblclick="revertZoom"
                >
                  {{ zoomLevel }}%
                </span>
                <img
                  alt="放大工作区"
                  title="放大工作区"
                  src="../../../assets/imgs/zoom-up.png"
                  class="cursor-pointer toolbar-icon"
                  style="margin-left: 10px"
                  @click="onZoomUp"
                />
              </a-col>
            </a-row>
          </div>
        </a-layout-content>
        <a-layout-footer
          v-show="!footerHidden"
          class="workspace-footer"
          :style="{
            maxHeight: `${footerHeight}px`,
            minHeight: `${footerHeight}px`,
            height: `${footerHeight}px`
          }"
        >
          Footer
          <vue-draggable-resizable
            :style="{ transform: `translate(0px, -24px)` }"
            class="workspace-footer-draggable"
            key="workspace-footer-draggable"
            :h="6"
            :y="-24"
            axis="y"
            :draggable="true"
            :resizable="false"
            @dragging="onFooterDrag"
            @dragstop="onFooterDragstop"
          ></vue-draggable-resizable>
        </a-layout-footer>
      </a-layout>
      <a-layout-sider v-show="!rightSideHidden" class="workspace-sider">
        <component-property></component-property>
      </a-layout-sider>
    </a-layout>
    <components-library ref="componentsLibrary"></components-library>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import ComponentsLibrary from './library'
import ComponentsTree from './components.tree'
import WorkspaceContent from './workspace.content'
import ComponentProperty from './component-property'

export default {
  name: 'Workspace',
  components: {
    VueDraggableResizable,
    ComponentsLibrary,
    ComponentsTree,
    WorkspaceContent,
    ComponentProperty
  },
  data() {
    return {
      dragging: false,
      contentSideWidth: 300,
      contentSideOffset: 12,
      footerHeight: 200,
      footerOffset: 10,
      sideHidden: false,
      rightSideHidden: false,
      footerHidden: true,
      zoomLevel: 100
    }
  },
  created() {},
  methods: {
    onSideDrag(x, y) {
      this.dragging = true
      this.contentSideWidth = x + this.contentSideOffset < 150 ? 150 : x + this.contentSideOffset
    },
    onSideDragstop(x, y) {
      this.contentSideWidth = x + this.contentSideOffset < 150 ? 150 : x + this.contentSideOffset
      this.dragging = false
    },
    onFooterDrag(x, y) {
      this.dragging = true
      this.footerHeight = 200 - y - 21 < 80 ? 80 : 200 - y - 21
    },
    onFooterDragstop(x, y) {
      this.footerHeight = 200 - y - 21 < 80 ? 80 : 200 - y - 21
      this.dragging = false
    },
    revertZoom() {
      this.zoomLevel = 100
      this.$refs.wc.resetPosition()
      this.$refs.wc.onZoom(1)
    },
    onZoomDown() {
      if (this.zoomLevel > 40) {
        this.zoomLevel -= 20
        this.$refs.wc.onZoom(this.zoomLevel / 100)
      }
    },
    onZoomUp() {
      if (this.zoomLevel < 300) {
        this.zoomLevel += 20
        this.$refs.wc.onZoom(this.zoomLevel / 100)
      }
    },
    onOpenLibrary() {
      this.$refs.componentsLibrary.onOpen()
    }
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
  .workspace {
    background: #fff;
    height: calc(100vh - 100px);
  }
  .dragging {
    user-select: none;
  }
  .workspace-layout {
    height: 100%;

    .ant-layout,
    .ant-layout-header,
    .ant-layout-sider,
    .ant-layout-footer {
      background: #fff;
    }
  }
  .workspace-header {
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    border-top: 0.55px solid #e8e8e8;
    border-left: 0.55px solid #e8e8e8;
    border-right: 0.55px solid #e8e8e8;
    border-bottom: 0.55px solid #e8e8e8;
  }
  .workspace-layout-content {
    border-left: 0.55px solid #e8e8e8;
  }
  .workspace-content-side {
    padding: 0 10px;
    position: relative;
    border-bottom: 0.55px solid #e8e8e8;
    overflow-x: auto;
    overflow-y: auto;
  }
  .workspace-content-side-draggable {
    z-index: 100 !important;
    position: absolute;
    top: 0;
    cursor: col-resize;
    height: 100% !important;
  }
  .workspace-content-side-draggable:hover {
    // background: #e8e8e8;
  }
  .workspace-content {
    position: relative;
    overflow: hidden;
    padding: 0;
    flex-grow: 1;
    border-left: 0.55px solid #e8e8e8;
    border-right: 0.55px solid #e8e8e8;
    border-bottom: 0.55px solid #e8e8e8;
  }
  .hidden-left-border {
    border-left: none;
  }
  .workspace-content-tools {
    z-index: 100;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 100%;
    padding: 0 10px;
    box-shadow: 0px -1px 0 rgba(0, 0, 0, 0.1);
    background: #fcfcfc;
    overflow: auto;
  }
  .toolbar-icon {
    width: 15px;
    height: 15px;
  }
  .toolbar-icon:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  .toolbar-icon-side {
    background: url(../../../assets/imgs/layout-side.png) no-repeat;
    background-size: 30px 15px;
  }
  .toolbar-icon-right-side {
    background: url(../../../assets/imgs/layout-right-side.png) no-repeat;
    background-size: 30px 15px;
  }
  .toolbar-icon-footer {
    background: url(../../../assets/imgs/layout-footer.png) no-repeat;
    background-size: 30px 15px;
  }
  .workspace-sider {
    padding: 0 10px;
    flex: 0 0 300px !important;
    max-width: 300px !important;
    min-width: 300px !important;
    border-top: 0.55px solid #e8e8e8;
    border-right: 0.55px solid #e8e8e8;
    border-bottom: 0.55px solid #e8e8e8;
  }
  .workspace-footer {
    position: relative;
    padding: 0 10px;
    border-left: 0.55px solid #e8e8e8;
    border-right: 0.55px solid #e8e8e8;
    border-bottom: 0.55px solid #e8e8e8;
  }
  .workspace-footer-draggable {
    position: absolute;
    left: 0;
    width: 100% !important;
    cursor: row-resize;
  }
  .workspace-footer-draggable:hover {
    // background: #e8e8e8;
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>
