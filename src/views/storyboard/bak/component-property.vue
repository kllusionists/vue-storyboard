<template>
  <div>component-property: {{ chosenComponent.name }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'component-property',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
    ...mapGetters(['componentTree', 'chosenComponent'])
  }
}
</script>
<style lang="scss">
</style>
