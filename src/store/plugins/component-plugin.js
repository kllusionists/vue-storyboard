const componentPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe(({ type, payload }, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    if (type === 'setComponentTree') {
      sessionStorage.setItem('componentTree', JSON.stringify(payload))
    } else if (type === 'setChosenComponent') {
      sessionStorage.setItem('chosenComponent', JSON.stringify(payload))
    }
  })
}

export default componentPlugin
