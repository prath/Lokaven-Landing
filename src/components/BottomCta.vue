<template>
  <article>
    <h2>
      Dapatkan akses awal ke platform kami
    </h2>
    <p>
      Saat ini lokaven sedang dalam tahap development, kami akan me-release aplikasi mobile kami di pertengahan April
    </p>
    <div class="call-to-actions">
      <Button
        label="Daftar Sebagai Host"
        varian="primary"
      />
      <Button
        label="Daftar Sebagai Guest"
        varian="secondary"
      />
    </div>
  </article>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'BottomCta',
  components: {
    Button
  }
}
</script>

<style scoped>
article {
  @apply container mx-auto text-center my-28;
}

h2 {
  @apply text-5xl font-thin text-center mb-6;
}

p {
  @apply px-80 text-lg leading-tight;
}

.call-to-actions {
  @apply mt-28;

  button:first-child {
    @apply mr-2;
  }
}
</style>