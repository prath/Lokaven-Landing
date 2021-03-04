<template>
  <button :class="varian">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    varian: String,
    label: String
  }
}
</script>

<style scoped>
button {
  @apply bg-marine-50 py-3 px-8 rounded-full text-white;
  @apply border-solid border-2 border-marine-50;

  &.secondary {
    @apply border-solid border-2 border-marine-50;
    @apply bg-white text-marine-50;
    &:hover {
      @apply opacity-50;
    }
  }

  &:hover {
    @apply opacity-60;
  }
  &:focus {
    @apply outline-none;
  }

  &.small {
    @apply py-1 px-5 text-sm;
  }
}
</style>