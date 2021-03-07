<template>
  <section class="connect">
    <h2>Lokaven menghubungkan Host dan Guest</h2>
    <div class="connect">
      <div class="art">
        <Pill class="host shadow-lg" label="Host" />
        <img src="../assets/hostconnector.svg" alt="guest connecting dots" class="host-connector" width="115" height="82">
        <img src="../assets/host.svg" alt="Host" width="350" height="320" loading="lazy">
      </div>
      <div class="text">
        <p class="host-desc">
          <strong>Host</strong> adalah anda yang memiliki paket usaha wisata, aktifitas seru & unik, workshop atau usaha sejenis
        </p>
        <img class="connecting-dots" src="../assets/hostguestconnect.svg" alt="host connects to guest" width="155" height="90">
        <p class="guest-desc">
          <strong>Guest</strong> adalah anda yang aktif dan ingin mendapatkan pengalaman baru nan seru
        </p>
        <div class="more">
          <span>Pelajari Lebih Lanjut</span>
          <img src="../assets/icons/arrow-down.svg" alt="icon arrow down" width="10" height="10">
        </div>
      </div>
      <div class="art">
        <Pill class="guest shadow-lg" label="Guest" />
        <img src="../assets/guestconnector.svg" alt="guest connecting dots" class="guest-connector" width="85" height="50">
        <img src="../assets/guest.svg" alt="Guest" width="350" height="320" loading="lazy">
      </div>
    </div>
  </section>
</template>

<script>
import Pill from './Pill.vue'

export default {
  name: 'Connect',
  components: {
    Pill
  }
}
</script>

<style scoped>
h2 {
  @apply font-light md:font-thin text-4xl sm:text-5xl  text-center leading-none;
  @apply mb-16;
}

section {
  @apply container;
  @apply mx-auto px-5 md:px-20;

  .connect {
    @apply flex flex-col md:flex-row justify-center items-center md:items-start;

    > div {
      @apply w-64;
    }

    .connecting-dots {
      @apply ml-10;
    }

    .art {
      @apply relative;
      @apply w-72 md:w-96;

      .host {
        @apply absolute;
        @apply top-8 right-10 md:right-20;
      }
      .guest {
        @apply absolute;
        @apply bottom-20 left-8;
      }
    }
    .art:last-child {
      @apply w-64 md:w-72;
    }
  }

  p {
    @apply my-5;
    @apply text-lg leading-tight;

    strong {
      @apply text-night-20 font-medium;
    }
    &.host-desc {
      @apply mt-0;
    }
    &.guest-desc {
      @apply mb-5 md:mb-20;
    }

  }
}

.host-connector {
  @apply hidden;
  @apply md:absolute md:top-0 md:-right-8;
}

.guest-connector {
  @apply hidden;
  @apply md:absolute md:bottom-9 md:-left-14;
}

.text {
  @apply mx-12;
}

.more {
  @apply hidden;
  @apply md:flex mb-16;
  @apply text-sm text-grey-60;

  > * {
    @apply mr-2;
  }
}

</style>