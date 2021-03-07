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
  @apply container;
  @apply mx-auto my-14 md:my-28;
  @apply text-center;
}

h2 {
  @apply text-4xl md:text-5xl font-light md:font-thin text-center;
  @apply mb-6 px-5;
}

p {
  @apply px-5 md:px-20 lg:px-48 xl:px-80;
  @apply text-lg leading-tight;
}

.call-to-actions {
  @apply mt-28;

  button:first-child {
    @apply md:mr-2 mb-2;
  }
}
</style>