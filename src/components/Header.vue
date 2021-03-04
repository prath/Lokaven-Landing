<template>
  <header>
    <div class="header-container">
      <img src="../assets/logo.svg" alt="Lokaven" />
      <div class="contact-info">
        <div class="small-cta">
          <Button
            label="Daftar Sebagai Host"
            varian="primary small"
            data-aos="fade"
            data-aos-duration="300"
            data-aos-anchor="#show-small-cta"
            data-aos-anchor-placement="top-center"
          />
          <Button
            label="Daftar Sebagai Guest"
            varian="secondary small"
            data-aos="fade"
            data-aos-duration="300"
            data-aos-anchor="#show-small-cta"
            data-aos-anchor-placement="top-center"
          />
        </div>
        <img src="../assets/icons/phone.svg" alt="contact person" />
        <a href="tel:081320471003">081320471003</a>
        <span>-</span>
        <span>Hafidz Mukti</span>
      </div>
    </div>
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  components: {
    Button
  }
}
</script>

<style scoped>
header {
  @apply fixed w-full top-0 bg-white z-50;

  .header-container {
    @apply container mx-auto h-24 flex justify-between items-center;
  }

  img {
    @apply h-7;
  }

  .contact-info {
    @apply flex justify-start items-center;

    > * {
      @apply mr-2;
    }

    img {
      @apply w-4;
    }

    span {
      @apply text-gray-400;
    }
  }

  a {
    @apply text-night-20;
  }
}

.small-cta {
  button {
    @apply mr-2;
  }
}
</style>