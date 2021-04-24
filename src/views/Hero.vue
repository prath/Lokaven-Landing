<template>
  <section>
    <img src="@/assets/hero.svg" alt="Land Rover Activity" width="539" height="528" loading="lazy">
    <article>
      <h1>Platform Penyedia Ragam Aktivitas Seru</h1>
      <p class="tagline">Jelajahi aktifitas seru yang aman</p>
      <p class="lead">Tertarik untuk mencoba platform kami? daftarkan diri Anda atau perusahaan Anda sekarang </p>
      <div class="call-to-actions">
        <Button
          @click="$router.push('/host-signup')"
          label="Daftar Sebagai Host"
          varian="primary"
        />
        <Button
          @click="$router.push('/guest-signup')"
          label="Daftar Sebagai Guest"
          varian="secondary"
        />
      </div>
    </article>
  </section>
</template>

<script>
import { ref } from 'vue'
import Button from '@/components/Button.vue'
export default {
  name: 'Hero',
  components: {
    Button
  },
  setup() {
    const hostSignup = ref(false)

    const toggleHostSignup = () => {
      hostSignup.value = !hostSignup.value
    }

    return {
      toggleHostSignup
    }
  }
}
</script>

<style scoped>
section {
  @apply container;
  @apply md:max-w-screen-lg lg:max-w-screen-xl;
  @apply flex justify-between items-center md:items-start flex-col md:flex-row;
  @apply mt-24 md:mt-32 mx-auto px-2 lg:px-16;

  > img {
    @apply relative;
    @apply w-72 md:w-1/2 lg:w-1/2 xl:w-auto;
    @apply md:-ml-8 md:mr-8 lg:mr-16;
  }

  article {
    @apply w-full;
    @apply md:pr-8 pt-8;
    @apply text-center md:text-left;

    h1 {
      @apply font-thin text-55xl md:text-6xl lg:text-7xl xl:text-75xl leading-herotitle;
      @apply mb-2;
      background-image: linear-gradient(135.73deg, #1425D0 -3.08%, #3FB3D6 79.23%);
      background-clip: text;
      color: transparent;
    }
    .tagline {
      @apply font-light text-grey-60 text-xl;
      @apply mb-12 md:mb-24;
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
    @apply sm:mr-2 mb-2;
  }
}

</style>