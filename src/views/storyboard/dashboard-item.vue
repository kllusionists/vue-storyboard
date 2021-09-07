<template>
  <div class="group relative cursor-pointer w-full h-full">
    <div class="group-back group-hover:-translate-x-7">
      {{ index + 1 }}
    </div>
    <div class="group-container hover:bg-gray-100 group-hover:rotate-3 group-hover:translate-x-2">
      <div class="max-w-md mx-auto">item</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-item',
  components: {},
  props: {
    index: Number
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
  .group-back {
    @apply absolute;
    @apply py-3;
    @apply px-3;
    @apply font-bold;
    @apply inset-0;
    @apply bg-gradient-to-tr;
    @apply from-blue-200;
    @apply to-blue-400;
    @apply shadow-lg;
    @apply transform;
    @apply skew-y-0;
    @apply -rotate-6;
    @apply rounded-3xl;
  }
  .group-container {
    @apply h-full;
    @apply py-3;
    @apply px-3;
    @apply bg-white;
    @apply shadow-lg;
    @apply rounded-3xl;
    @apply transform;
  }
</style>
