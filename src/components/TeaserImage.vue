<template>
  <figure>
    <a href=""><img class="teaser" :src="imgSrc" alt="pangandaran" /></a>
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