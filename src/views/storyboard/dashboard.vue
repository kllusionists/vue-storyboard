<template>
  <div class="min-h-screen flex justify-center items-center" :style="backgroundImage()">
    <div class="lg:w-8/12 sm:w-10/12 flex justify-center items-center flex-wrap">
      <div
        v-for="(item, index) in 50"
        :key="index"
        class="flex flex-col lg:justify-center items-center w-60 h-32 mr-14 mb-12"
      >
        <dashboard-item :index="index"></dashboard-item>
      </div>
    </div>
  </div>
</template>

<script>
import hoursColor from '../storyboard/hours-color'
import dashboardItem from './dashboard-item'

export default {
  name: 'storyboard-dashboard',
  components: {
    dashboardItem
  },
  data() {
    return {
      from: '',
      to: ''
    }
  },
  created() {
    const hours = new Date().getHours()
    const color = hoursColor[hours]
    this.from = `${color[0].r}, ${color[0].g}, ${color[0].b}, ${color[0].a}`
    this.to = `${color[1].r}, ${color[1].g}, ${color[1].b}, ${color[1].a}`

    // TODO 定时器换到 Web Worker const worker = Worker()
    setInterval(() => {
      const hours = new Date().getHours()
      const color = hoursColor[hours]
      this.from = `${color[0].r}, ${color[0].g}, ${color[0].b}, ${color[0].a}`
      this.to = `${color[1].r}, ${color[1].g}, ${color[1].b}, ${color[1].a}`
      console.log(this.from)
      console.log(this.to)
    }, 1000 * 60 * 30)
  },
  mounted() {},
  methods: {
    backgroundImage() {
      return {
        backgroundImage: `linear-gradient(to bottom right, rgba(${this.from}), rgba(${this.to}))`
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
