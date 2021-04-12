<template>
  <section>
    <div id="show-small-cta">

      <!--
        1
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/1.svg" alt="Tour Kopi Gunung Keramat" width="250" height="400" loading="lazy"></a>
        <figcaption class="top-28 -left-5">
          <span>
            <div class="icon bg-teal-50">
              <img src="@/assets/icons/bean.svg" width="24" height="24">
            </div>
            Tour Kopi Gunung Keramat
          </span>
        </figcaption>
      </figure>

      <!--
        2
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/2.svg" alt="Uji Nyali Babakan Siliwangi" width="250" height="400" loading="lazy"></a>
        <figcaption class="bottom-28 -left-5">
          <span>
            <div class="icon bg-gold-60">
              <img src="@/assets/icons/ghost.svg" width="24" height="24">
            </div>
            Uji Nyali Babakan Siliwangi
          </span>
        </figcaption>
      </figure>

      <!--
        3
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/3.svg" alt="BBQ Pit Abraham &amp; Smith" width="250" height="400" loading="lazy"></a>
        <figcaption class="bottom-44 -left-5">
          <span>
            <div class="icon bg-blue-60">
              <img src="@/assets/icons/bbq.svg" width="24" height="24">
            </div>
            BBQ Pit Abraham &amp; Smith
          </span>
        </figcaption>
      </figure>

      <!--
        4
       -->
      <figure>
        <a href=""><img class="teaser" src="@/assets/teaser/4.svg" alt="Longboarding di Bandung" width="250" height="400" loading="lazy"></a>
        <figcaption class="top-28 -left-5">
          <span>
            <div class="icon bg-red-90">
              <img src="@/assets/icons/skate.svg" width="24" height="24">
            </div>
            Longboarding di Bandung
          </span>
        </figcaption>
      </figure>

    </div>
  </section>
</template>

<script>
import TeaserImage from '@/components/TeaserImage.vue'
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
  background-image: url('@/assets/bgactivity.svg');
  background-repeat: repeat-x;
  background-position: center;

  > div {
    @apply container;
    @apply mx-auto;
    @apply flex justify-center flex-wrap;
  }
}

figure {
  @apply relative;
  @apply w-3/4 sm:w-auto;
  @apply mx-2 md:mx-8 mb-4;

  a {
    @apply block;
  }
  img {
    @apply w-full;
  }

  figcaption {
    @apply absolute;

    span {
      @apply relative;
      @apply bg-night-20;
      @apply text-grey-90 text-xs;
      @apply rounded-full;
      @apply py-1 pr-3 pl-12;
      @apply shadow-2xl;
    }
  }
}

.icon {
  @apply absolute -top-2 left-0;
  @apply p-2;
  @apply rounded-full;
  @apply shadow-xl;
}

.teaser {
  @apply rounded-full;
  @apply shadow-2xl;
}
</style>