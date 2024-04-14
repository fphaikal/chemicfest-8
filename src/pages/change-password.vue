<template>
  <section class=" dark:bg-dark">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/login" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-12 h-auto mr-2" src="/osis.png" alt="logo">
        OSIS SMK-SMTI Yogyakarta
      </a>
      <div v-if="validation"
        class="w-full p-6 bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Change Password
        </h2>
        <div v-if="messageStatus" role="alert" class="alert alert-error mt-4 bg-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{{ message }} </span>
        </div>
        <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
              Password</label>
            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required="">
          </div>
          <div>
            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
              password</label>
            <input v-model="confirmPassword" type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required="">
          </div>
          <button type="submit" @click.prevent="resetPassword"
            class="w-full text-white bg-dark hover:bg-dark-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset
            Password</button>
        </form>
      </div>
      <div v-else
        class="w-full p-6 bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center  ">
          Token Expired/ Tidak Sesuai
        </h2>
      </div>
    </div>
  </section>
  <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="modal-box bg-white dark:bg-dark-1 text-dark dark:text-white p-5 rounded-lg">
      <div class="flex gap-3 justify-center">
        <span class="loading loading-ring loading-lg my-auto"></span>
        <h1 class="text-lg font-bold my-auto">Sedang Diproses</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      validation: false,
      message: '',
      messageStatus: false,
      loading: false
    }
  },
  async mounted() {
    const token = this.$route.query.token;
    const uuid = this.$route.params.uuid;

    const validation = await axios.post('https://chemicfest.site/api/verify/forgot-password', {
      token: token.toString(),
      uuid: parseInt(uuid)
    });

    this.validation = validation.data.result;
  },
  methods: {
    async resetPassword() {
      try {
        this.loading = true;

        const token = this.$route.query.token;
        const uuid = this.$route.params.uuid;
        
        const response = await axios.post('https://chemicfest.site/api/change/forgot-password', {
          token: token.toString(),
          uuid: parseInt(uuid),
          password: this.password,
          confirmpassword: this.confirmPassword
        });

        if (response.data.code === 200) {
          this.$router.push({ name: 'login' });
        }
        console.log(response);
      } catch (error) {
        console.error(error);
        this.message = error.response.data.message;
        this.messageStatus = true;
        this.loading = false;
      }
    }
  }
}
</script>