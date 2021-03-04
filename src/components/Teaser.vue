<template>
  <section>
    <div id="show-small-cta">
      <TeaserImage
        caption="Tour Kopi Gunung Keramat"
        pos="top-28 -left-5"
        iconSrc="src/assets/icons/bean.svg"
        iconColor="bg-teal-50"
        imgSrc="src/assets/teaser/1.svg" />

      <TeaserImage
        caption="Uji Nyali Babakan Siliwangi"
        pos="bottom-28 -left-5"
        iconSrc="src/assets/icons/ghost.svg"
        iconColor="bg-gold-60"
        imgSrc="src/assets/teaser/2.svg" />

      <TeaserImage
        caption="BBQ Pit Abraham &amp; Smith"
        pos="bottom-10 -left-5"
        iconSrc="src/assets/icons/bbq.svg"
        iconColor="bg-blue-60"
        imgSrc="src/assets/teaser/3.svg" />

      <TeaserImage
        caption="Longboarding di Bandung"
        pos="bottom-44 -left-5"
        iconSrc="src/assets/icons/skate.svg"
        iconColor="bg-red-90"
        imgSrc="src/assets/teaser/4.svg" />
    </div>
  </section>
</template>

<script>
import TeaserImage from '@components/TeaserImage.vue'
export default {
  name: 'Teaser',
  components: {
    TeaserImage
  }
}
</script>

<style scoped>
section {
  @apply py-20;
  background-image: url('../assets/bgactivity.svg');
  background-repeat: repeat-x;
  background-position: center;

  > div {
    @apply container mx-auto flex justify-center;
  }
}
</style>