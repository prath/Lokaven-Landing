<template>
  <section>
    <article>
      <h3>Keuntungan lain yang didapatkan dari lokaven</h3>
      <ul class="extra-benefits">
        <li>
          <div>
            <img src="../assets/icons/market.svg" alt="Memasarkan" class="exc">
            Membantu memasarkan layanan milik Host
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/icons/create-content.svg" alt="Membuat Konten">
            Bekerja sama membuat konten dengan Host
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/icons/cloud.svg" alt="Kampanye Ramah Lingkungan">
            Mengkampanyekan gerakan wisata ramah lingkungan
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/icons/case.svg" alt="Mendampingi Host">
            Mendampingi dalam konsultasi bisnis agar Host dapat bertumbuh &amp; mencapai profit
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/icons/box.svg" alt="Mengatur Quota">
            Host dapat mengatur jumlah quota guest di tengah pandemi
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/icons/recommendation.svg" alt="Rekomendasi Aktifitas">
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
  @apply container mx-auto px-20 pt-14 pb-36;
  @apply border-b border-gray-300 border-dotted;
}

h3 {
  @apply text-3xl mb-10 ml-16 w-2/5;
}

.extra-benefits {
  @apply flex flex-wrap justify-start items-baseline px-14;

  li {
    @apply flex-grow w-full md:w-1/3;
    div {
      @apply flex justify-start items-baseline text-left pr-5 mb-3 text-lg leading-tight;

      img {
        @apply mr-2 relative w-6;
        top: 0.15rem;

        &.exc {
          @apply top-2;
        }
      }
    }
  }
}


</style>