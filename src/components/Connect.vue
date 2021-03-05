<template>
  <section class="connect">
    <h2>Lokaven menghubungkan Host dan Guest</h2>
    <div class="connect">
      <div class="art">
        <Pill class="host shadow-lg" label="Host" />
        <img src="../assets/hostconnector.svg" alt="guest connecting dots" class="host-connector">
        <img src="../assets/host.svg" alt="Host">
      </div>
      <div class="text">
        <p class="host-desc">
          <strong>Host</strong> adalah anda yang memiliki paket usaha wisata, aktifitas seru & unik, workshop atau usaha sejenis
        </p>
        <img class="connecting-dots" src="../assets/hostguestconnect.svg" alt="host connects to guest">
        <p class="guest-desc">
          <strong>Guest</strong> adalah anda yang aktif dan ingin mendapatkan pengalaman baru nan seru
        </p>
        <div class="more">
          <span>Pelajari Lebih Lanjut</span>
          <img src="../assets/icons/arrow-down.svg" >
        </div>
      </div>
      <div class="art w-80 -mt-5">
        <Pill class="guest shadow-lg" label="Guest" />
        <img src="../assets/guestconnector.svg" alt="guest connecting dots" class="guest-connector">
        <img src="../assets/guest.svg" alt="Host">
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
  @apply text-5xl font-thin text-center mb-16;
}

section {
  @apply container mx-auto px-20;

  .connect {
    @apply flex justify-center items-start;
    > div {
      @apply w-64;
    }

    .connecting-dots {
      @apply ml-10;
    }

    .art {
      @apply relative w-96;

      .host {
        @apply absolute top-8 right-20;
      }
      .guest {
        @apply absolute bottom-20 left-8;
      }
    }
  }

  p {
    @apply my-5 text-lg leading-tight;

    strong {
      @apply text-night-20 font-medium;
    }
    &.host-desc {
      @apply mt-0;
    }
    &.guest-desc {
      @apply mb-20;
    }

  }
}

.host-connector {
  @apply absolute top-0 -right-8;
}

.guest-connector {
  @apply absolute bottom-9 -left-14;
}

.text {
  @apply mx-12;
}

.more {
  @apply flex text-sm text-grey-60 mb-16;
  > * {
    @apply mr-2;
  }
}

</style>