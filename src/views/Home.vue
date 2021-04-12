<template>
  <Header />
  <Hero />
  <Teaser />
  <Connect />
  <Benefits />
  <ExtraBenefits />
  <BottomCta />
  <Footer />
  <router-view v-if="toggleModalSignup"/>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'

// View Components
import Header from '@/views/Header.vue'
import Hero from '@/views/Hero.vue'
import Teaser from '@/views/Teaser.vue'
import Connect from '@/views/Connect.vue'
import Benefits from '@/views/Benefits.vue'
import ExtraBenefits from '@/views/ExtraBenefits.vue'
import BottomCta from '@/views/BottomCta.vue'
import Footer from '@/views/Footer.vue'

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
  setup() {
    const route = useRoute()
    const elBody = document.body

    // show/hide modal signup host
    const toggleModalSignup = ref((route.name === 'HostSignup' || route.name === 'GuestSignup') ? true : false)
    checkModalBody()

    watch(() => route.name, () => {

      // check if the route is changed and it's pointing to the signup host modal
      toggleModalSignup.value = (route.name === 'HostSignup' || route.name === 'GuestSignup') ? true : false

      // if modal signup is opened, disable the scroll on body elements
      checkModalBody()
    })

    /**
     * Check if modal active in body
     */
    function checkModalBody() {
      if(toggleModalSignup.value) {
        elBody.classList.add('modal-opened')
      } else {
        elBody.classList.remove('modal-opened')
      }
    }

    return {
      toggleModalSignup
    }
  }
}
</script>

<style>
</style>