import palette from './palette'

export default {

  async getColor (image) {
    const img = await new Graph().load(image)
    const data = img.imgData.data
    // if (!window.Worker) {
    //   const worker = new Worker('palette-worker.js')
    //   const typedArray = new Uint8ClampedArray(data)
    //   worker.postMessage(typedArray.buffer, [typedArray.buffer])
    //   return new Promise((resolve) => {
    //     worker.onmessage = function (e) {
    //       resolve(e.data)
    //     }
    //   })
    // } else {
    //   return palette.getPalette(data)
    // }
    return palette.getPalette(data)
  }
}

class Graph {
  constructor() {
    this.img = null
    this.imgData = null
  }

  getImgData () {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = this.img.width
    canvas.height = this.img.height
    context.drawImage(this.img, 0, 0)
    this.imgData = context.getImageData(0, 0, canvas.width, canvas.height)
  }

  load (image) {
    if (typeof image === 'string') {
      this.img = document.createElement('img')
      this.img.src = image
      this.img.crossOrigin = 'Anonymous'
      this.img.setAttribute('crossOrigin', '')
    } else if (image instanceof HTMLImageElement) {
      this.img = image
      this.img.crossOrigin = 'Anonymous'
      this.img.setAttribute('crossOrigin', '')
    } else {
      throw new Error('invalid image source')
    }
    return new Promise((resolve, reject) => {
      const onImgLoad = () => {
        this.getImgData()
        resolve(this)
      }
      if (this.img.complete) {
        onImgLoad()
      } else {
        this.img.onload = onImgLoad
        this.img.onerror = (e) => {
          reject(e)
        }
      }
    })
  }
}
