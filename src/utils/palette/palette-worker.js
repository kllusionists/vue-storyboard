import palette from './palette'

onmessage = function (e) {
  const paletteData = palette.getPalette(e.data)
  postMessage(paletteData)
}

// self.addEventListener('message', function (e) {
// const palette = palette.getPalette(e.data)
// self.postMessage(e.data);
// }, false)
