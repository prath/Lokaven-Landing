<template>
  <Header />
  <Hero />
  <Teaser />
  <Connect />
  <Benefits />
  <ExtraBenefits />
  <BottomCta />
  <Footer />
</template>

<script>
import AOS from 'aos'

import Header from '@components/Header.vue'
import Hero from '@components/Hero.vue'
import Teaser from '@components/Teaser.vue'
import Connect from '@components/Connect.vue'
import Benefits from '@components/Benefits.vue'
import ExtraBenefits from '@components/ExtraBenefits.vue'
import BottomCta from '@components/BottomCta.vue'
import Footer from '@components/Footer.vue'

export default {
  components: {
    Header,
    Hero,
    Teaser,
    Connect,
    Benefits,
    ExtraBenefits,
    BottomCta,
    Footer
  },
  setup () {
    AOS.init({
      duration: 800
    })
  }
}
</script>

<style>
body {
  font-family: -apple-system, system-ui,  BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  @apply text-grey-40;
}

h1, h2, h3, h4, h5, h6 {
  @apply text-night-20;
}
</style>