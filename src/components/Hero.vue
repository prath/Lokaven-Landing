<template>
  <section>
    <img src="../assets/hero.svg" alt="Land Rover Activity" />
    <article>
      <h1>Platform Penyedia Ragam Aktivitas Seru</h1>
      <p class="tagline">Jelajahi aktifitas seru yang aman</p>
      <p class="lead">Tertarik untuk mencoba platform kami? daftarkan diri Anda atau perusahaan Anda sekarang </p>
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
  </section>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'Hero',
  components: {
    Button
  }
}
</script>

<style scoped>
section {
  @apply mt-32 container mx-auto px-16 flex justify-between items-start;

  > img {
    @apply relative -ml-8 mr-16;
  }

  article {
    @apply w-full pr-8 pt-8;

    h1 {
      @apply font-thin mb-2;
      font-size: 5.2rem;
      line-height: .85;
      background-image: linear-gradient(135.73deg, #1425D0 -3.08%, #3FB3D6 79.23%);
      background-clip: text;
      color: transparent;
    }
    .tagline {
      @apply font-light text-grey-60 text-2xl mb-24;
    }
  }

  p {
    @apply text-grey-40;
    &.lead {
      @apply text-base leading-none;
    }
  }
}

.call-to-actions {
  @apply mt-5;

  button:first-child {
    @apply mr-2;
  }
}

</style>