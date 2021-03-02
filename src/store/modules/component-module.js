import { isNull } from '../../utils/index'

const componentModule = {
  state: {
    componentTree: [],
    chosenComponent: {}
  },

  getters: {
    componentTree: state => {
      if (!isNull(state.componentTree)) {
        return state.componentTree
      } else {
        const componentTree = sessionStorage.getItem('componentTree')
        return isNull(componentTree) ? [] : JSON.parse(componentTree)
      }
    },
    chosenComponent: state => state.chosenComponent
  },

  mutations: {
    setChosenComponent (state, component) {
      state.chosenComponent = component

      // TODO 拖拽改变组件大小同步变化到画布上
      for (let i = 0; i < state.componentTree.length; i++) {
        const com = state.componentTree[i]
        if (com.id === component.id) {
          com.style.width = component.style.width
          com.style.height = component.style.height
        }
      }
    },
    setComponentTree (state, componentTree) {
      state.componentTree = componentTree
    }
  }
}

export default componentModule
