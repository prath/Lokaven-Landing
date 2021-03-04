<template>
  <span :class="class">{{ label }}</span>
</template>

<script>
export default {
  name: 'Pill',
  props: {
    label: String,
    class: String
  }
}
</script>

<style scoped>
span {
  @apply py-1 px-3 rounded-full;

  &.host {
    @apply bg-marine-50 text-grey-90;
  }
  &.guest {
    @apply bg-teal-50 text-night-20;
  }
}
</style>