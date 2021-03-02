<template>
  <a-tree
    class="components-tree"
    draggable
    selectable
    default-expand-all
    :selected-keys="[chosenComponent.id]"
    :tree-data="componentTree"
    :replace-fields="{ title: 'name', key: 'id' }"
    @dragenter="onDragEnter"
    @drop="onDrop"
    @select="onSelect"
  >
  </a-tree>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'components-tree',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {
    onDragEnter(info) {},
    onDrop(info) {
      // target
      // const dropKey = info.node.eventKey

      // source
      // const dragKey = info.dragNode.eventKey
    },
    onSelect(selectedKeys, { selected, selectedNodes, node, event }) {
      const dataRef = node.dataRef
      this.$store.commit(
        'setChosenComponent',
        dataRef.id === this.chosenComponent.id ? {} : dataRef
      )
    }
  },
  computed: {
    ...mapGetters(['componentTree', 'chosenComponent'])
  }
}
</script>
<style lang="scss">
  .components-tree {
    .k-ant-page-header {
      border: none !important;
    }
    .k-ant-page-header-extral-right {
      display: inline-block !important;
      justify-content: unset !important;
      align-items: unset !important;
    }
  }
</style>
