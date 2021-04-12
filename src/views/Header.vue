<template>
  <header>
    <div class="header-container">
      <div>
        <img src="@/assets/logo.svg" alt="Lokaven" class="logo" width="125" height="30"/>
        <!-- <img src="@/assets/logogram.svg" alt="Lokaven" class="logogram"/> -->
      </div>
      <div class="menu">
        <div class="small-cta">
          <Button
            @click="$router.push('/host-signup')"
            label="Daftar Sebagai Host"
            varian="primary small"
            data-aos="fade"
            data-aos-duration="300"
            data-aos-anchor="#show-small-cta"
            data-aos-anchor-placement="top-center"
          />
          <Button
            @click="$router.push('/guest-signup')"
            label="Daftar Sebagai Guest"
            varian="secondary small"
            data-aos="fade"
            data-aos-duration="300"
            data-aos-anchor="#show-small-cta"
            data-aos-anchor-placement="top-center"
          />
        </div>
        <div class="contact-info">
          <img src="@/assets/icons/phone.svg" alt="contact person" width="14" height="20">
          <a href="tel:081320471003">081320471003</a>
          <span class="separator">-</span>
          <span class="cp">Hafidz Mukti</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Header',
  components: {
    Button
  }
}
</script>

<style scoped>
.logo {
  @apply ml-5 md:ml-0;
}

header {
  @apply fixed top-0 z-20;
  @apply  w-full;
  @apply  bg-white;

  .header-container {
    @apply container;
    @apply flex justify-between items-center;
    @apply mx-auto;
    @apply h-24;
  }

  img {
    @apply h-7;
  }

  .menu {
    @apply flex flex-wrap justify-end items-center;

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
  @apply hidden;
  @apply md:block;
  button {
    @apply mr-2;
  }
}

.contact-info {
  @apply flex items-center;
  > * {
    @apply mr-1
  }
  .cp, .separator {
    @apply hidden sm:inline-block;
  }
}
</style>