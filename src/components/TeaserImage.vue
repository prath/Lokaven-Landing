<template>
  <figure>
    <a href=""><img class="teaser" :src="`@/assets/teaser/${imgSrc}`" alt="pangandaran" /></a>
    <figcaption :class="pos">
      <span>
        <div class="icon" :class="iconColor">
          <img :src="iconSrc">
        </div>
        {{ caption }}
      </span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'TeaserImage',
  props: {
    caption: String,
    imgSrc: String,
    iconSrc: String,
    iconColor: String,
    pos: String
  }
}
</script>

<style scoped>
figure {
  @apply relative;
  @apply mx-8;

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
  width: 250px;
  height: 400px;
}
</style>