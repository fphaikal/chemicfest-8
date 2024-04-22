<template>
  <section class="bg-white dark:bg-dark">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-12 h-auto mr-2" src="/osis.png" alt="logo">
        OSIS SMK-SMTI Yogyakarta
      </a>
      <div
        class="w-full p-6 bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Forgot your password?
        </h1>
        <p class="font-light text-gray-500 dark:text-gray-400">Don't fret! Just type in your email and we will send you
          a code to reset your password!</p>
        <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input v-model="email" type="email" name="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com" required="">
          </div>
          <button type="submit" @click.prevent="resetPassword"
            class="w-full text-white bg-dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset
            password</button>
        </form>
      </div>
    </div>
  </section>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box bg-white dark:bg-dark text-dark dark:text-white">
      <h3 class="font-bold text-lg">Email Sent</h3>
      <p class="py-4">Reset has been sent to your email!</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Ok</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
import axios from 'axios';  
export default {
  data() {
    return {
      email: ''
    }
  },
  async mounted() {

  },
  methods: {
    async resetPassword() {
      try {
        const response = await axios.post('https://chemicfest.site/api/request/forgot-password', {
          users: this.email
        });

        if (response.data.message === "Reset has been sent to your email") {
          document.getElementById('my_modal_1').showModal();
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>