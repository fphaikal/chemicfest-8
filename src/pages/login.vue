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
            <div>
              <TabGroup>
                <TabList
                  class="flex space-x-1 rounded-xl bg-dark dark:bg-dark-1 p-1 max-w-[370px] md:max-w-lg mx-auto shadow">
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="['w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected ? 'bg-white dark:bg-dark dark:text-white text-dark-1 shadow' : 'text-white dark:text-white hover:bg-white/[0.12] hover:text-white',]">
                      Login
                    </button>
                  </Tab>
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="['w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected ? 'bg-white dark:bg-dark dark:text-white text-dark-1 shadow' : 'text-white dark:text-white hover:bg-white/[0.12] hover:text-white',]">
                      Register
                    </button>
                  </Tab>
                </TabList>

                <TabPanels class="mt-2 max-w-[370px] md:max-w-lg  mx-auto">
                  <TabPanel>
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
                              <input type="password" v-model="login.pass"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password" required>
                            </div>
                            <div class="mx-auto text-center pt-5">
                              <button type="submit"
                                class="rounded-2xl py-3 px-10 inline-flex bg-dark-1 text-white hover:bg-dark">Login</button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>
                  <!--Register Panel  -->
                  <TabPanel>
                    <ul>
                      <li class="relative rounded-md pt-3">
                        <div class="flex flex-col mx-auto" @submit.prevent="handleRegister">
                          <form class="w-full flex ">
                            <div class="relative w-1/2">
                              <input type="text" id="email-address-icon" v-model="register.name"
                              class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nama" required>
                            </div>
                            <div class="relative w-1/2 ml-2">
                              <input type="text" id="email-address-icon" v-model="register.username"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Username" required>
                            </div>
                          </form>
                          <form class="w-full pt-3 mx-auto">
                            <div class="relative ">
                              <input type="email" id="email-address-icon" v-model="register.email"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email" required>
                            </div>
                            <div class="relative mt-3">
                              <input type="number" id="email-address-icon" v-model="register.phone"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nomor Telepon" required>
                            </div>
                            <div class="relative mt-3">
                              <input type="password" id="email-address-icon" v-model="register.password"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password" required>
                            </div>
                            <div class="form-control mt-3">
                              <label class="label cursor-pointer">
                                <span class="label-text">Siswa</span> 
                                <input v-model="selectedRole" value="siswa" type="radio" name="role" class="radio checked:bg-blue-500"/>
                              </label>
                            </div>
                            <div class="form-control">
                              <label class="label cursor-pointer">
                                <span class="label-text">Guru</span> 
                                <input v-model="selectedRole" value="guru" type="radio" name="role" class="radio checked:bg-blue-500" />
                              </label>
                            </div>
                            <div class="form-control">
                              <label class="label cursor-pointer">
                                <span class="label-text">Alumni</span> 
                                <input v-model="selectedRole" value="alumni" type="radio" name="role" class="radio checked:bg-blue-500"/>
                              </label>
                            </div>
                            
                            <div class="mx-auto pt-5 text-center">
                              <button type="submit"
                                class="rounded-2xl py-3 px-10 inline-flex bg-dark-1 text-white hover:bg-dark">Register</button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
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
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Silahkan Lakukan Verifikasi Akun Terlebih Dahulu</span>
        </div>
        <div v-if="alertType" role="alert" class="alert alert-warning mt-2 bg-yellow-500 text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{{ alertMessage }}</span>
        </div>
        <div v-if="wrongOtp" role="alert" class="alert alert-warning mt-2 bg-yellow-500 text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{{ wrongVerifyMessage }}</span>
        </div>

        <div class="py-4 flex gap-2">
          <div class="w-3/4 my-auto">
            <input type="email" id="email-address-icon" v-model="verify.user"
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
      register: {
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
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
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('https://chemicfest.site/api/login', {
          user: this.login.user,
          pass: this.login.pass,
        });

        if (response.data.code === 200) {
          document.cookie = `sessionId=${response.data.sessionId}`;

          // Save user data to localStorage
          localStorage.setItem('role', response.data.data.Role);
          localStorage.setItem('username', response.data.data.Username);
          localStorage.setItem('phone', response.data.data.Phone);
          localStorage.setItem('email', response.data.data.Email);
          localStorage.setItem('uuid', response.data.data.UUID);
          localStorage.setItem('sessionId', response.data.data.sessionId);
          console.log('User data saved to localStorage:', response.data.data.Role);

          console.log('Login response:', response);
          router.push({ name: 'home' });
        } else if (response.data.code === 403) {
          document.getElementById('my_modal_2').showModal();
          console.log(response.data.message);
        }

      } catch (error) {
        console.error('Login error:', error);
        if (error.response.data.code === 403) {
          document.getElementById('my_modal_2').showModal();
        } else if (error.response.data.code === 401) {
          this.alertMessage = 'Password Salah';
          this.alertType = true;
        }
      }
    },

    async handleRegister() {
      console.log('Selected Role:', this.selectedRole); // Tambahkan ini untuk mencetak nilai selectedRole
      try {

        const response = await axios.post('https://chemicfest.site/api/register', {
          name: this.register.name,
          username: this.register.username,
          email: this.register.email,
          phone: this.register.phone.toString(),
          password: this.register.password,
          role: this.selectedRole,
        });

        if (response.data.code === 200) {
          console.log('Register response:', response);
          router.push({ name: 'login' });
        }

      } catch (error) {
        // Handle errors, such as displaying error messages to the user
        console.log(this.selectedRole)
        console.error('Register error:', error);
      }
    },

    async handleVerify() {
      try {
        const response = await axios.post('https://chemicfest.site/api/validation/getotp', {
          users: this.verify.user,
        });

        if (response.data.code === 200) {
          console.log('Verify response:', response);
          this.alertType = true;
          this.alertMessage = 'Kode Berhasil Dikirim Silahkan Cek Email/Whatsapp Anda';

          this.verificationModal = false;
        }

      } catch (error) {
        // Handle errors, such as displaying error messages to the user
        if (error.response.data.code === 400) {
          this.alertType = true;
          this.alertMessage = 'Mohon tunggu 5 menit sebelum meminta OTP lagi';

          this.verificationModal = false;
        }
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
        if (error.response.data.code === 400) {
          this.alertMessage = 'OTP Kadaluwarsa Silahkan Coba Lagi';
          this.alertType = true;

          this.verificationModal = false;
        } else if (error.response.data.code === 404) {
          this.alertMessage = 'OTP Kadaluwarsa Silahkan Coba Lagi';
          this.alertType = true;

          this.verificationModal = false;
        }
      }
    }
  },
}

</script>