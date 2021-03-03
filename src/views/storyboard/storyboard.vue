<template>
  <div class="storyboard">
    <h1>This is a storyboard page</h1>
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div>1</div>
      <div class="col-start-3">2</div>
      <div>3</div>
      <div>4</div>
      <div class="row-start-1 col-start-2 col-span-2">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'storyboard',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
