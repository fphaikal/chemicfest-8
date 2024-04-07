<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'

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
                <div class="flex flex-col gap-0 md:flex-row md:gap-5 mt-3 text-dark dark:text-white mx-auto ">
                  <div class="form-control my-auto">
                    <label class="label cursor-pointer gap-2 justify-start">
                      <input v-model="selectedRole" value="siswa" type="radio" name="role"
                        class="radio checked:bg-dark dark:checked:bg-white" />
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

                  <!-- Form Register -->
                  <div v-if="selectedRole" class="flex flex-col mx-auto" @submit.prevent="handleRegister">
                    <form v-if="selectedRole === 'siswa'" class="w-full mx-auto">
                      <div class="relative">
                        <select v-model="register.name"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                          <option value="" disabled>Pilih Nama Anda</option>
                          <option v-for="siswa in siswa2Options" :key="siswa.NIS" :value="siswa.Nama" class="text-justify">
                            {{ siswa.Kelas }} - {{ siswa.Nama }}
                          </option>
                        </select>
                      </div>
                    </form>
                    <form v-else-if="selectedRole === 'guru'" class="w-full mx-auto">
                      <div class="relative">
                        <select v-model="register.name"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                          <option value="" disabled>Pilih Nama Anda</option>
                          <option v-for="guru in guruOptions" :key="guru.NIP" :value="guru.Nama">{{ guru.Nama }}</option>
                        </select>
                      </div>
                    </form>
                    <form v-else-if="selectedRole === 'keluargasiswa'" class="w-full mx-auto">
                      <div class="relative">
                        <select v-model="register.part_name"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                          <option value="" disabled>Pilih Nama Siswa</option>
                          <option v-for="siswa in siswaOptions" :key="siswa.NIS" :value="siswa.Nama" class="text-justify">
                            {{ siswa.Kelas }} - {{ siswa.Nama }}
                          </option>
                        </select>
                      </div>
                    </form>
                    <form v-else-if="selectedRole === 'keluargaguru'" class="w-full mx-auto">
                      <div class="relative">
                        <select v-model="register.part_name"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                          <option value="" disabled>Pilih Nama Guru</option>
                          <option v-for="guru in guruOptions" :key="guru.NIP" :value="guru.Nama">{{ guru.Nama }}</option>
                        </select>
                      </div>
                    </form>

                    

                    <form class="w-full flex pt-3">
                      <div v-if="selectedRole === 'keluargasiswa' || selectedRole === 'keluargaguru' || selectedRole === 'alumni'" class="relative w-1/2">
                        <input type="text" v-model="register.name"
                          class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Nama" required>
                      </div>
                      <div :class="selectedRole === 'siswa' || selectedRole === 'guru' ? 'relative w-full ' : 'relative w-1/2 ml-2'">
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

                      <div v-if="selectedRole === 'alumni'" class="mt-3">
                        <hr>
                        <p class="text-dark dark:text-white mt-3">Jenis Dokumen</p>
                        <div class="flex flex-row gap-5  text-dark dark:text-white mx-auto mb-1">
                          <div class="form-control my-auto ">
                            <label class="label cursor-pointer gap-2">
                              <input v-model="docType" value="1" type="radio" name="docType"
                                class="radio checked:bg-dark dark:checked:bg-white" />
                              <span class="label-text">KTP</span>
                            </label>
                          </div>
                          <div class="form-control my-auto ">
                            <label class="label cursor-pointer gap-2">
                              <input v-model="docType" value="2" type="radio" name="docType"
                                class="radio checked:bg-dark dark:checked:bg-white" />
                              <span class="label-text">Kartu Pelajar</span>
                            </label>
                          </div>
                        </div>

                        <div class="w-full">
                          <!-- Area unggahan pertama -->
                          <div class="mx-auto mt-1">
                            <input type="file" @change="handleFileUpload('tandaPengenal', $event)"
                              class="w-full text-dark dark:text-white text-sm bg-gray-700 border border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg" />
                          </div>

                          <!-- Area unggahan kedua -->
                          <p class="m-3 ms-0 text-dark dark:text-white">Upload Ijazah</p>
                          <div class="mx-auto">
                            <input id="ijazah" type="file" @change="handleFileUpload('ijazah', $event)"
                              class="w-full text-dark dark:text-white text-sm bg-gray-700 border border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg" />
                          </div>
                        </div>
                      </div>


                      <div v-else-if="selectedRole === 'keluargasiswa' || selectedRole === 'keluargaguru'" class="mt-4">
                        <hr>
                        <!-- Area unggahan pertama -->
                        <p class="mt-4 text-dark dark:text-white">Upload KTP</p>
                        <div class="mx-auto mt-1">
                          <input type="file" @change="handleFileUpload('tandaPengenal', $event)"
                            class="w-full text-dark dark:text-white text-sm bg-gray-700 border border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg" />
                        </div>

                        <!-- Area unggahan kedua -->
                        <p class="m-3 ms-0 text-dark dark:text-white">Upload Kartu Keluarga</p>
                        <div class="mx-auto">
                          <input id="kk" type="file" @change="handleFileUpload('kk', $event)"
                            class="w-full text-dark dark:text-white text-sm bg-gray-700 border border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg" />
                        </div>
                      </div>


                      <div class="flex flex-col mx-auto pt-5 text-center gap-3">
                        <button type="submit" @click.prevent="handleRegister"
                          class="rounded-2xl py-3 px-10 inline-flex bg-dark-1 text-white hover:bg-dark w-full justify-center mx-auto">Register</button>
                        <p class="text-dark dark:text-white">Sudah Memiliki Akun? Silahkan Untuk <RouterLink to="/login"
                            class="text-blue-500">Login</RouterLink>
                        </p>
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

        <!--Asset-->
        <div class="w-full hidden lg:flex bg-cover bg-center"
          style="background-image: url(https://chemicfest.site/file/gallery/80001.jpg);">
        </div>
      </div>
    </div>

    <!--Alert Modal-->
    <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="modal-box bg-white dark:bg-dark-1 text-dark dark:text-white p-5 rounded-lg">
        <div class="flex gap-3 justify-center">
          <span class="loading loading-ring loading-lg my-auto"></span>
          <h1 class="text-lg font-bold my-auto">Data Anda Sedang Di Upload</h1>
        </div>
      </div>
    </div>
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
        part_name: '',
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
      loading: false,
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

      isDragging: false,

      //Docummnet Upload
      tandaPengenal: null,
      ijazah: null,
      kk: null,

      siswaOptions: [], // Opsi nama siswa dari API
      siswa2Options: [], // Opsi nama siswa dari API
      guruOptions: [], // Opsi nama guru dari API
    };
  },
  async mounted() {
    try {
      const siswaData = await axios.get('https://chemicfest.site/api/get/storage/json/siswa/all/false/false');
      this.siswaOptions = siswaData.data

      const siswa2Data = await axios.get('https://chemicfest.site/api/get/storage/json/siswa/2/true/false');
      this.siswa2Options = siswa2Data.data

      const guruData = await axios.get('https://chemicfest.site/api/get/storage/json/guru');
      this.guruOptions = guruData.data
    } catch (error) {
      console.error('Error fetching siswa data:', error);
    }
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    handleFileUpload(type, event) {
      if (type === 'ijazah') {
        this.ijazah = event.target.files[0];
      } else if (type === 'tandaPengenal') {
        this.tandaPengenal = event.target.files[0];
      } else {
        this.kk = event.target.files[0];
      }
    },

    async handleRegister() {
      try {
        this.loading = true;

        if (this.selectedRole === 'siswa' || this.selectedRole === 'guru') {
          // Proses registrasi untuk siswa atau guru
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
        } else if (this.selectedRole === 'alumni') {
          const tandaPengenal = new FormData();
          tandaPengenal.append('image', this.tandaPengenal);

          const ijazah = new FormData();
          ijazah.append('image', this.ijazah);

          // Upload the Base64 strings to imgBB   
          const URL_API = 'https://api.imgbb.com/1/upload?expiration=600&key=fdd88c025c946ca1dbd38d8b743f183a';

          const response1 = await axios.post(URL_API, tandaPengenal);
          const response2 = await axios.post(URL_API, ijazah);

          // Lakukan pemeriksaan jika upload kedua foto berhasil
          if (response1.status === 200 && response2.status === 200) {
            // Mendapatkan URL foto dari respons API imgbb
            const imgUrl1 = response1.data.data.url;
            const imgUrl2 = response2.data.data.url;

            // Registrasi ke API chemicfest.site dengan URL foto dari API imgbb
            const registerResponse = await axios.post('https://chemicfest.site/api/register', {
              name: this.register.name,
              username: this.register.username,
              email: this.register.email,
              phone: this.register.phone.toString(),
              password: this.register.password,
              repassword: this.register.repassword,
              role: this.selectedRole,
              type_image_1: parseInt(this.docType),
              image_1: imgUrl1,
              type_image_2: 4,
              image_2: imgUrl2,
            });

            // Lakukan penanganan respons dari API chemicfest.site
            if (registerResponse.data.code === 200) {
              console.log('Register response:', registerResponse);
              router.push({ name: 'login' });

              this.alertType = false;
              this.alertSuccess = true;
              this.alertMessage = registerResponse.data.message;
            }
          }
        } else if (this.selectedRole === 'keluargasiswa' || this.selectedRole === 'keluargaguru') {
          const tandaPengenal = new FormData();
          tandaPengenal.append('image', this.tandaPengenal);

          const kk = new FormData();
          kk.append('image', this.kk);

          // Upload the Base64 strings to imgBB   
          const URL_API = 'https://api.imgbb.com/1/upload?expiration=600&key=fdd88c025c946ca1dbd38d8b743f183a';

          const response1 = await axios.post(URL_API, tandaPengenal);
          const response2 = await axios.post(URL_API, kk);

          // Lakukan pemeriksaan jika upload kedua foto berhasil
          if (response1.status === 200 && response2.status === 200) {
            // Mendapatkan URL foto dari respons API imgbb
            const imgUrl1 = response1.data.data.url;
            const imgUrl2 = response2.data.data.url;

            // Registrasi ke API chemicfest.site dengan URL foto dari API imgbb
            const registerResponse = await axios.post('https://chemicfest.site/api/register', {
              part_name: this.register.part_name,
              name: this.register.name,
              username: this.register.username,
              email: this.register.email,
              phone: this.register.phone.toString(),
              password: this.register.password,
              repassword: this.register.repassword,
              role: this.selectedRole,
              type_image_1: 1,
              image_1: imgUrl1,
              type_image_2: 3,
              image_2: imgUrl2,
            });

            // Lakukan penanganan respons dari API chemicfest.site
            if (registerResponse.data.code === 200) {
              console.log('Register response:', registerResponse);
              router.push({ name: 'login' });

              this.alertType = false;
              this.alertSuccess = true;
              this.alertMessage = registerResponse.data.message;
            }
          }
        }

      } catch (error) {
        // Handle errors, such as displaying error messages to the user
        console.error('Register error:', error);

        this.loading = false;
        this.alertMessage = error.response.data.message || error.response.data.error.message;
        this.alertType = true;
        this.alertSuccess = false;
      }
    },

  },
}

</script>