<template>
  <section>
    <article>
      <h3>Keuntungan lain yang didapatkan dari lokaven</h3>
      <ul class="extra-benefits">
        <li>
          <div>
            <img src="@/assets/icons/market.svg" alt="Memasarkan" class="exc" width="18" height="18">
            Membantu memasarkan layanan milik Host
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/icons/create-content.svg" alt="Membuat Konten" width="18" height="18">
            Bekerja sama membuat konten dengan Host
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/icons/cloud.svg" alt="Kampanye Ramah Lingkungan" width="18" height="18">
            Mengkampanyekan gerakan wisata ramah lingkungan
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/icons/case.svg" alt="Mendampingi Host" width="18" height="18">
            Mendampingi dalam konsultasi bisnis agar Host dapat bertumbuh &amp; mencapai profit
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/icons/box.svg" alt="Mengatur Quota" width="18" height="18">
            Host dapat mengatur jumlah quota guest di tengah pandemi
          </div>
        </li>
        <li>
          <div>
            <img src="@/assets/icons/recommendation.svg" alt="Rekomendasi Aktifitas" width="18" height="18">
            Guest mendapatkan rekomendasi paket aktifitas sesuai minat
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ExtraBenefit'
}
</script>

<style scoped>
section {
  @apply bg-grey-90;
}

article {
  @apply container;
  @apply mx-auto px-5 md:px-20 pt-14 pb-14 md:pb-36;
  @apply border-b border-gray-300 border-dotted;
}

h3 {
  @apply text-3xl;
  @apply mb-10 ml-2 md:ml-16;
  @apply md:w-2/5;
}

.extra-benefits {
  @apply flex flex-wrap justify-start items-baseline;
  @apply px-3 md:px-14;

  li {
    @apply flex-grow;
    @apply w-full md:w-1/3;
    div {
      @apply flex justify-start items-baseline;
      @apply text-left text-lg leading-tight;
      @apply pr-5 mb-3;

      img {
        @apply mr-2;
        @apply relative;
        top: 0.15rem;
        @apply w-6;

        &.exc {
          @apply top-2;
        }
      }
    }
  }
}


</style>