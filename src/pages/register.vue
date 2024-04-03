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
              <h1 class="text-center text-dark dark:text-white text-3xl font-bold mb-5">Register</h1>
              <ul>
                <li class="relative rounded-md pt-3">
                  
                  <div v-if="alertType" role="alert" class="alert alert-error bg-red-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ alertMessage }}</span>
                  </div>
                  <div v-if="alertSuccess" role="alert" class="alert alert-success bg-green-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span>{{ alertMessage }}</span>
                  </div>

                  <div class="flex flex-col mx-auto" @submit.prevent="handleRegister">
                    <form class="w-full flex ">
                      <div class="relative w-1/2">
                        <input type="text" v-model="register.name"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Nama" required>
                      </div>
                      <div class="relative w-1/2 ml-2">
                        <input type="text" v-model="register.username"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Username" required>
                      </div>
                    </form>
                    <form class="w-full pt-3 mx-auto">
                      <div class="relative ">
                        <input type="email" v-model="register.email"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Email" required>
                      </div>
                      <div class="relative mt-3">
                        <input type="number" v-model="register.phone"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Nomor Telepon" required>
                      </div>
                      <div class="relative mt-3">
                        <input :type="showPassword ? 'text' : 'password'" v-model="register.password"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Password" required>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <button type="button" @click="toggleShow"><span class="icon is-small is-right">
                              <Icon :icon="showPassword ? 'mdi:show' : 'mdi:hide'" width="20"></Icon>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div class="relative mt-3">
                        <input :type="showPassword ? 'text' : 'password'" v-model="register.repassword"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Re-enter Password" required>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <button type="button" @click="toggleShow"><span class="icon is-small is-right">
                              <Icon :icon="showPassword ? 'mdi:show' : 'mdi:hide'" width="20"></Icon>
                            </span>
                          </button>
                        </div>
                      </div> 
                      
                      <div class="flex flex-col gap-0 md:flex-row md:gap-5 mt-3 text-dark dark:text-white mx-auto mb-3">
                        <div class="form-control my-auto">
                          <label class="label cursor-pointer gap-2 justify-start">
                            <input v-model="selectedRole" value="siswa" type="radio" name="role" class="radio checked:bg-dark dark:checked:bg-white" />
                            <span class="label-text">Siswa</span>
                          </label>
                        </div>
                        <div class="form-control my-auto">
                          <label class="label cursor-pointer gap-2 justify-start">
                            <input v-model="selectedRole" value="guru" type="radio" name="role"
                              class="radio checked:bg-dark dark:checked:bg-white" />
                            <span class="label-text">Guru</span>
                          </label>
                        </div>
                        <div class="form-control my-auto">
                          <label class="label cursor-pointer gap-2 justify-start">
                            <input v-model="selectedRole" value="alumni" type="radio" name="role"
                              class="radio checked:bg-dark dark:checked:bg-white" />
                            <span class="label-text">Alumni</span>
                          </label>
                        </div>
                        <div class="form-control my-auto">
                          <label class="label cursor-pointer gap-2 justify-start">
                            <input v-model="selectedRole" value="keluargasiswa" type="radio" name="role"
                              class="radio checked:bg-dark dark:checked:bg-white" />
                            <span class="label-text">Keluarga Siswa</span>
                          </label>
                        </div>
                        <div class="form-control my-auto">
                          <label class="label cursor-pointer gap-2 justify-start">
                            <input v-model="selectedRole" value="keluargaguru" type="radio" name="role"
                              class="radio checked:bg-dark dark:checked:bg-white" />
                            <span class="label-text">Keluarga Guru</span>
                          </label>
                        </div>
                      </div>

                      <div v-if="selectedRole === 'alumni'">
                        <hr>
                        <label for="uploadFileAlumni" class="bg-white dark:bg-dark-1 text-center rounded w-full min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto m-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path
                              d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                              data-original="#000000" />
                            <path
                              d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                              data-original="#000000" />
                          </svg>
                          <p class="text-gray-400 font-semibold text-sm">Drag & Drop or <span class="text-[#007bff]">Choose file</span> to
                            upload</p>
                          <input type="file" id='uploadFileAlumni' class="hidden" />
                          <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                        </label>
                        <p class="text-dark dark:text-white">Jenis Dokumen</p>
                        <div class="flex flex-row gap-5  text-dark dark:text-white mx-auto">
                          <div class="form-control my-auto ">
                            <label class="label cursor-pointer gap-2">
                              <input v-model="docType" value="ktp" type="radio" name="docType"
                                class="radio checked:bg-dark dark:checked:bg-white" />
                              <span class="label-text">KTP</span>
                            </label>
                          </div>
                          <div class="form-control my-auto ">
                            <label class="label cursor-pointer gap-2">
                              <input v-model="docType" value="kartupelajar" type="radio" name="docType"
                                class="radio checked:bg-dark dark:checked:bg-white" />
                              <span class="label-text">Kartu Pelajar</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div v-else-if="selectedRole === 'keluargasiswa' || selectedRole === 'keluargaguru'">
                        <hr>
                        <p class="mt-4 text-dark dark:text-white">Upload KTP</p>
                        <label for="uploadFileKTP" class="bg-white dark:bg-dark-1 text-center rounded w-full min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto m-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path
                              d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                              data-original="#000000" />
                            <path
                              d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                              data-original="#000000" />
                          </svg>
                          <p class="text-gray-400 font-semibold text-sm">Drag & Drop or <span class="text-[#007bff]">Choose file</span> to
                            upload</p>
                          <input type="file" id='uploadFileKTP' class="hidden" />
                          <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                        </label>
                        <p class="text-dark dark:text-white">Upload KK</p>
                        <label for="uploadFileKK" class="bg-white dark:bg-dark-1 text-center rounded w-full min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto m-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path
                              d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                              data-original="#000000" />
                            <path
                              d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                              data-original="#000000" />
                          </svg>
                          <p class="text-gray-400 font-semibold text-sm">Drag & Drop or <span class="text-[#007bff]">Choose file</span> to
                            upload</p>
                          <input type="file" id='uploadFileKK' class="hidden" />
                          <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                        </label>

                      </div>

                      
                      <div class="flex flex-col mx-auto pt-5 text-center gap-3">
                        <button type="submit" class="rounded-2xl py-3 px-10 inline-flex bg-dark-1 text-white hover:bg-dark w-full justify-center mx-auto">Register</button>
                        <p class="text-dark dark:text-white">Sudah Memiliki Akun? Silahkan Untuk <RouterLink to="/login" class="text-blue-500">Login</RouterLink></p>
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
        <div class="w-full hidden lg:flex bg-cover bg-center" style="background-image: url(https://chemicfest.site/file/gallery/80001.jpg);">
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
      docType: null,
      login: {
        user: '',
        pass: '',
      },
      register: {
        name: '',
        username: '',
        email: '',
        phone: '62',
        password: '',
        repassword: '',
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

    async handleRegister() {
      try {
        if(this.selectedRole === 'siswa' || this.selectedRole === 'guru'){
          const response = await axios.post('https://chemicfest.site/api/register', {
            name: this.register.name,
            username: this.register.username,
            email: this.register.email,
            phone: this.register.phone.toString(),
            password: this.register.password,
            repassword: this.register.repassword,
            role: this.selectedRole,
          });
  
          if (response.data.code === 200) {
            console.log('Register response:', response);
            router.push({ name: 'login' });
  
            this.alertType = false;
            this.alertSuccess = true;
            this.alertMessage = response.data.message;
          }
        } 
        else if(this.selectedRole === 'alumni') {

        }
      } catch (error) {
        // Handle errors, such as displaying error messages to the user
        console.log(this.selectedRole)
        console.error('Register error:', error.response.data.message);

        this.alertMessage = error.response.data.message;
        this.alertType = true;
        this.alertSuccess = false;
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
    },
  },
}

</script>