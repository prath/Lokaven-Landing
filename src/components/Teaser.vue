<template>
  <section>
    <div id="show-small-cta">

      <!--
        1
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/1.svg" alt="Tour Kopi Gunung Keramat" /></a>
        <figcaption class="top-28 -left-5">
          <span>
            <div class="icon bg-teal-50">
              <img src="@/assets/icons/bean.svg">
            </div>
            Tour Kopi Gunung Keramat
          </span>
        </figcaption>
      </figure>

      <!--
        2
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/2.svg" alt="Uji Nyali Babakan Siliwangi" /></a>
        <figcaption class="bottom-28 -left-5">
          <span>
            <div class="icon bg-gold-60">
              <img src="@/assets/icons/ghost.svg">
            </div>
            Uji Nyali Babakan Siliwangi
          </span>
        </figcaption>
      </figure>

      <!--
        3
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/3.svg" alt="BBQ Pit Abraham &amp; Smith" /></a>
        <figcaption class="bottom-44 -left-5">
          <span>
            <div class="icon bg-blue-60">
              <img src="@/assets/icons/bbq.svg">
            </div>
            BBQ Pit Abraham &amp; Smith
          </span>
        </figcaption>
      </figure>

      <!--
        4
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/4.svg" alt="Longboarding di Bandung" /></a>
        <figcaption class="top-28 -left-5">
          <span>
            <div class="icon bg-red-90">
              <img src="@/assets/icons/skate.svg">
            </div>
            Longboarding di Bandung
          </span>
        </figcaption>
      </figure>

    </div>
  </section>
</template>

<script>
import TeaserImage from './TeaserImage.vue'
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

figure {
  @apply relative mx-8;

  figcaption {
    @apply absolute;

    span {
      @apply relative bg-night-20 text-grey-90 text-xs rounded-full py-1 pr-3 pl-12 shadow-2xl;
    }
  }
}

.icon {
  @apply absolute -top-2 left-0 p-2 rounded-full shadow-xl;
}

.teaser {
  @apply rounded-full shadow-2xl;
  width: 250px;
  height: 400px;
}
</style>