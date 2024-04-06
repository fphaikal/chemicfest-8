<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <section>
    <div class="relative max-h-fit min-w-0 flex-1">
      <div class="flex gap-3 min-h-[97vh] sm:min-h-[100vh] self-end">
        <div class="w-full  ">
          <div class="flex flex-col h-full justify-between">
            <RouterLink :to="{ name: 'home' }"
              class="text-bold font-bold text-4xl text-center text-dark dark:text-white pt-5">Chemicfest #8</RouterLink>
            <div class="w-2/3 mx-auto">
              <h1 class="text-center text-dark dark:text-white text-3xl font-bold mb-5">Login</h1>
              <ul>
                <li class="relative rounded-md pt-3">
                  <div v-if="verificationSuccess" role="alert" class="alert alert-success bg-green-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Akun Berhasil di Verifikasi</span>
                  </div>
                  <div v-if="alertType" role="alert" class="alert alert-error bg-red-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ alertMessage }}</span>
                  </div>
                  <div class="flex flex-col ">
                    <form class="w-full mx-auto" @submit.prevent="handleLogin">
                      <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <Icon icon="ic:baseline-email" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true" />
                        </div>
                        <input name="user" type="username" v-model="login.user"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Email" required>
                      </div>
                      <div class="relative mt-3">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <Icon icon="mingcute:lock-fill" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true" />
                        </div>
                        <input :type="showPassword ? 'text' : 'password'" v-model="login.pass"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Password" required>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <button type="button" @click="toggleShow"><span class="icon is-small is-right">
                              <Icon :icon="showPassword ? 'mdi:show' : 'mdi:hide'" width="20"></Icon>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-col mx-auto text-center pt-5 gap-4">
                        <button type="submit" class="rounded-2xl py-3 px-10 inline-flex bg-dark-1 text-white hover:bg-dark w-full justify-center mx-auto">Login</button>
                        <p class="texxt-dark dark:text-white">Belum Memiliki Akun? Silahkan Untuk <RouterLink to="/register" class="text-blue-500">Register</RouterLink></p>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex flex-col w-full self-center pb-5">
              <div class=" my-3  gap-2 self-center">
                <button @click="toggleDark()"
                  class="py-2 rounded-full flex items-center p-2 justify-center dark:text-white text-dark shadow-lg  bg-slate-50 dark:bg-dark-1">
                  <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
                  <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full  self-end hidden lg:flex">
          <img src="../assets/BA.png" class="w-auto h-[600px] self-end mx-auto" alt="">
        </div>
      </div>
    </div>
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box bg-white text-dark dark:bg-dark dark:text-white">
        <h3 class="font-bold text-lg">Verifikasi</h3>

        <div v-if="verificationModal" role="alert" class="alert alert-warning mt-2 bg-yellow-500 text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Silahkan Lakukan Verifikasi Akun Terlebih Dahulu</span>
        </div>
        <div v-if="warningType" role="alert" class="alert alert-warning mt-2 bg-yellow-500 text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{{ warningMessage }}</span>
        </div>
        <div class="py-4 flex gap-2">
          <div class="w-3/4 my-auto">
            <input type="email" v-model="verify.user"
              class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email/Phone Number" required>
          </div>
          <div class="w-1/4 my-auto">
            <button @click.prevent="handleVerify()" type="submit"
              class="rounded-xl py-2 px-5 inline-flex bg-dark-1 text-white hover:bg-dark">Send
              Code</button>
          </div>
        </div>
        <div class=" flex gap-2">
          <div class="w-3/4 my-auto">
            <input type="code" v-model="verify.code"
              class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="OTP Code" required>
          </div>
          <div class="w-1/4 my-auto">
            <button type="submit" @click.prevent="handleVerifyOTP()"
              class="rounded-xl py-2 px-5 inline-flex bg-dark-1 text-white hover:bg-dark">Verify</button>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </section>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'Login',
  data() {
    return {
      selectedRole: null,
      login: {
        user: '',
        pass: '',
      },
      verify: {
        user: '',
        code: '',
      },
      alertMessage: '',
      alertType: false,
      verificationSuccess: false,
      verificationModal: true,
      wrongVerifyMessage: '',

      wrongOtp: false,

      warningMessage: '',
      warningType: false,
      showPassword: false,

      alertSuccess: false,

    };
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      try {
        const response = await axios.post('https://chemicfest.site/api/login', {
          user: this.login.user,
          pass: this.login.pass,
        });

        if (response.data.code === 200) {
          const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // One year from now
          document.cookie = `sessionId=${response.data.sessionId}; expires=${expires.toUTCString()}; path=/`;

          // Save user data to localStorage
          localStorage.setItem('role', response.data.data.Role);
          localStorage.setItem('username', response.data.data.Username);
          localStorage.setItem('phone', response.data.data.Phone);
          localStorage.setItem('email', response.data.data.Email);
          localStorage.setItem('uuid', response.data.data.UUID);
          localStorage.setItem('sessionId', response.data.sessionId);
          console.log('User data saved to localStorage:', response);


          // Set timeout to delete localStorage when cookie expires
          setTimeout(() => {
            localStorage.removeItem('role');
            localStorage.removeItem('username');
            localStorage.removeItem('phone');
            localStorage.removeItem('email');
            localStorage.removeItem('uuid');
            localStorage.removeItem('sessionId');
            console.log('User data deleted from localStorage.');
          }, expires - Date.now());

          router.push({ name: 'home' });

          this.alertType = false;
        }

      } catch (error) {
        console.error('Login error:', error);
        if (error.response.data.code === 403 ) {
          document.getElementById('my_modal_2').showModal();
        } else {
          this.alertMessage = error.response.data.message;
          this.alertType = true;
        }
      }
    },

    async handleVerify() {
      try {
        const response = await axios.post('https://chemicfest.site/api/validation/getotp', {
          users: this.verify.user,
        });

        if (response.data.code === 200) {
          console.log('Verify response:', response);
          this.warningType = true;
          this.warningMessage = 'Kode Berhasil Dikirim Silahkan Cek Email/Whatsapp Anda';

          this.verificationModal = false;
        }

      } catch (error) {
        // Handle errors, such as displaying error messages to the user

        this.warningType = true;
        this.warningMessage = error.response.data.message;

        this.verificationModal = false;

        console.error('Verify error:', error);
      }
    },

    async handleVerifyOTP() {
      try {
        const response = await axios.post('https://chemicfest.site/api/validation/giveotp', {
          users: this.verify.user,
          code: this.verify.code,
        });

        if (response.data.code === 200) {
          console.log('Verify OTP response:', response);
          document.getElementById('my_modal_2').close();
          this.verificationSuccess = true;
        }

      } catch (error) {
        // Handle errors, such as displaying error messages to the user
        console.error('Verify OTP error:', error);

        this.warningMessage = error.response.data.message;
        this.warningType = true;

        this.verificationModal = false;

      }
    }
  },
}

</script>