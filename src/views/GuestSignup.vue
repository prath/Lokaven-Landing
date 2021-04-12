<template>
  <div class="modal-wrapper">
    <router-link to="/">
      <div class="overlay">
      </div>
    </router-link>
    <section class="modal two-column">
      <article class="left">
        <div class="image-overlay">
        </div>
        <!-- <img src="@/assets/host.svg" alt="Host" width="350" height="320" loading="lazy"> -->
        <h2>
          Jelajahi Aktifitas-aktifitas Seru
        </h2>
      </article>

      <form class="right" @submit.prevent="signup">
        <h3>Daftar menjadi guest</h3>
        <p>
          Isi form berikut untuk masuk menjadi early user kami
        </p>

        <section class="error-msg" v-if="err">
          {{ errmsg }}<br>
          Mohon maaf, proses signup tidak dapat dilakukan saat ini, mohon mencoba lagi. Terima kasih.
        </section>

        <section class="success-msg" v-if="succeeded">
          Pendaftaran berhasil, kami akan menghubungi Anda kembali, terima kasih.
        </section>

        <div class="two-cols-fields">
          <div class="fieldholder">
            <label for="firstname">Nama depan</label>
            <input type="text" v-model="firstname" class="field" required>
          </div>
          <div class="fieldholder">
            <label for="lastname">Nama belakang</label>
            <input type="text" v-model="lastname" class="field" required>
          </div>
        </div>
        <div class="one-col-field">
          <div class="fieldholder">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="field" required>
          </div>
        </div>
        <div class="two-cols-fields">
          <Spinner v-if="!loading" message="Signing up...." />
          <Button
            v-else
            label="Daftar Sebagai Guest"
            varian="primary"
            class="w-full"
          />
        </div>
        <div class="two-cols-fields mt-3">
          <p class="small-muted-text">
            Data anda akan kami gunakan untuk menjadi user awal pada platform lokaven. Anda akan mendapatkan email menjelang launching aplikasi kami.
          </p>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Button from '@/components/Button.vue'
import Spinner from '@/components/Spinner.vue'

const apiUrl = import.meta.env.VITE_API_BASE_URL

export default {
  name: 'GuestSignup',
  components: {
    Button,
    Spinner
  },
  setup() {
    const route = useRoute()

    const loading = ref(true)
    const succeeded = ref(false)
    const err = ref(false)
    const errmsg = ref('')

    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')

    async function signup () {
      loading.value = false
      err.value = false

      const payload = {
        first_name: firstname.value,
        last_name: lastname.value,
        email: email.value
      }

      try {
        const res = await axios.post(`${apiUrl}auth/register/pilots`, payload)

        if(res.status === 200) {
          loading.value = true
          succeeded.value = true
          err.value = false
        }

      } catch (error) {
        err.value = true
        errmsg.value = error.response.data.title
        loading.value = true
        succeeded.value = false
      }

    }

    return {
      loading,
      succeeded,
      err,
      errmsg,

      firstname,
      lastname,
      email,

      signup
    }
  }
}
</script>

<style scoped>
h2 {
  @apply font-light md:font-thin text-white text-4xl sm:text-5xl leading-none;
  @apply mb-16 -ml-3;
  @apply absolute bottom-0;
}

h3 {
  @apply text-3xl;
  @apply mb-1;
}

h3 + p {
  @apply text-sm leading-tight text-grey-60;
  @apply mb-6;
}

.overlay {
  @apply bg-night-10 opacity-80;
  @apply fixed top-0 left-0 z-40;
  @apply w-full h-screen;
  @apply overflow-scroll;
}

.modal-wrapper {
  @apply fixed top-0 bottom-0 left-0 right-0 z-30;
  @apply overflow-scroll;
  @apply w-full h-screen;
}

.modal {
  @apply absolute left-0 right-0 z-50;
  @apply w-4/5;
  @apply md:max-w-screen-lg lg:max-w-screen-xl;
  @apply bg-white;
  @apply rounded-lg;
  @apply mx-auto my-28;
}

.two-column {
  @apply flex justify-between flex-col md:flex-row;

  .left {
    @apply relative;
    @apply w-full md:w-2/5 h-52 md:h-auto;
    @apply p-14;
    background-image: url('@/assets/teaser/3.svg');
    @apply bg-no-repeat bg-clip-border bg-cover;
    @apply rounded-l-lg
  }
  .right {
    @apply w-full md:w-3/5 h-full;
    @apply rounded-lg;
    @apply py-14 px-14;
    @apply bg-grey-90;
    @apply overflow-scroll;
  }
}

.two-cols-fields {
  @apply flex flex-col lg:flex-row justify-between;
}
.one-col-field {
  @apply block;

  .fieldholder {
    @apply w-full;

    &:last-child {
      @apply ml-0;
    }
  }
}

.fieldholder {
  @apply mb-4;
  @apply w-full lg:w-1/2;

  &:first-child {
    @apply lg:mr-2;
  }
  &:last-child {
    @apply lg:ml-2;
  }

  > * {
    @apply block;
  }

  label {
    @apply mb-2;
    @apply text-night-20;
  }

  .field {
    @apply rounded-md;
    @apply py-3 px-5;
    @apply w-full;
  }
}

.image-overlay {
  @apply bg-night-10 opacity-50;
  @apply absolute top-0 left-0 bottom-0 right-0;
  @apply w-full;
}

.error-msg {
  @apply bg-red-400;
  @apply p-5 mb-6;
  @apply text-white;
  @apply rounded-lg;
}

.success-msg {
  @apply bg-green-500;
  @apply p-5 mb-6;
  @apply text-white;
  @apply rounded-lg;
}
</style>