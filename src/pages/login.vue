<script setup>
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
                <TabList class="flex space-x-1 rounded-xl bg-dark dark:bg-dark-1 p-1 max-w-lg mx-auto shadow">
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

                <TabPanels class="mt-2 max-w-lg  mx-auto">
                  <TabPanel>
                    <ul>
                      <li class="relative rounded-md pt-3">
                        <div class="flex flex-col ">
                          <form class="w-full mx-auto" @submit.prevent="handleLogin">
                            <div class="relative">
                              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <Icon icon="ic:baseline-email" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true" />
                              </div>
                              <input name="user" type="username" v-model="user"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email" required>
                            </div>
                            <div class="relative mt-3">
                              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <Icon icon="mingcute:lock-fill" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true" />
                              </div>
                              <input type="password" v-model="pass"
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
                        <div class="flex flex-col mx-auto">
                          <form class="w-full flex ">
                            <div class="relative w-1/2">
                              <input type="name" id="email-address-icon"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nama" required>
                            </div>
                            <div class="relative w-1/2 ml-2">
                              <input type="username" id="email-address-icon"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Username" required>
                            </div>
                          </form>
                          <form class="w-full pt-3 mx-auto">
                            <div class="relative ">
                              <input type="email" id="email-address-icon"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email" required>
                            </div>
                          </form>
                          <form class="w-full pt-3 mx-auto">
                            <div class="relative ">
                              <input type="number" id="email-address-icon"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nomor Telepon" required>
                            </div>
                          </form>
                          <form class="w-full pt-3 mx-auto">
                            <div class="relative ">
                              <input type="password" id="email-address-icon"
                                class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password" required>
                            </div>
                          </form>
                          <div class="mx-auto pt-5">
                            <button
                              class="rounded-2xl py-3 px-10 w-full inline-flex bg-dark-1 text-white hover:bg-dark">Register</button>
                          </div>
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

  </section>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'Login',
  data() {
    return {
      user: '',
      pass: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('https://chemicfest.site/api/login', {
          user: this.user,
          pass: this.pass,
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
        }

      } catch (error) {
        // Handle errors, such as displaying error messages to the user
        console.error('Login error:', error);
      }
    },
  },
}

</script>