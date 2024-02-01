<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})

import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <section>
    <div class="relative max-h-fit min-w-0 flex-1 p-3">
      <div class="flex gap-3 min-h-[97vh] sm:min-h-[0vh]">
        <div class="w-full self-center">
          <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-dark p-1 max-w-lg mx-auto">
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="['w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected ? 'bg-white text-dark-1 shadow' : 'text-white hover:bg-white/[0.12] hover:text-white',]">
                  Login
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="['w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected ? 'bg-white text-text-dark-1 shadow' : 'text-white hover:bg-white/[0.12] hover:text-white',]">
                  Register
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-2 max-w-lg  mx-auto">
              <TabPanel>
                <ul>
                  <li class="relative rounded-md pt-3 hover:bg-gray-100">
                    <div class="flex flex-col ">
                      <form class="w-full mx-auto">
                        <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="ic:baseline-email" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="email" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email" required>
                        </div>
                      </form>
                      <form class="w-full pt-3 mx-auto">
                        <div class="relative ">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="mingcute:lock-fill" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="password" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Password" required>
                        </div>
                      </form>
                      <div class="mx-auto pt-5">
                        <button class="rounded-2xl py-3 px-10 w-full inline-flex bg-dark-1 text-white hover:bg-dark">Login</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPanel>
              <!--Register Panel  -->
              <TabPanel>
                <ul>
                  <li class="relative rounded-md pt-3 hover:bg-gray-100">
                    <div class="flex flex-col mx-auto">
                      <form class="w-full flex ">
                        <div class="relative w-1/2">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="ic:baseline-email" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="email" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nama" required>
                        </div>
                        <div class="relative w-1/2 ml-2">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="ic:baseline-email" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="email" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Username" required>
                        </div>
                      </form>
                      <form class="w-full pt-3 mx-auto">
                        <div class="relative ">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="mingcute:lock-fill" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="password" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email" required>
                        </div>
                      </form>
                      <form class="w-full pt-3 mx-auto">
                        <div class="relative ">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="mingcute:lock-fill" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="password" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nomor Telepon" required>
                        </div>
                      </form>
                      <form class="w-full pt-3 mx-auto">
                        <div class="relative ">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Icon icon="mingcute:lock-fill" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true" />
                          </div>
                          <input type="password" id="email-address-icon"
                            class="bg-white-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Password" required>
                        </div>
                      </form>
                      <div class="mx-auto pt-5">
                        <button class="rounded-2xl py-3 px-10 w-full inline-flex bg-dark-1 text-white hover:bg-dark">Register</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <!--
        <div class="flex flex-col w-full self-center">
            <div class=" my-3  gap-2 self-center">
              <button @click="toggleDark()"
                class="py-2 rounded-full flex items-center p-2 justify-center dark:text-white text-dark shadow-lg  bg-slate-50 dark:bg-dark-1">
                <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
                <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
              </button>
            </div>
          </div>
        </div>
        <!---->
        <div class="bg-dark w-full min-h-[97vh] rounded-3xl self-center hidden sm:flex">
          <div class="flex flex-col self-end mx-auto h-100px">
            <div>
              <h1 class="text-5xl underline decoration-sky-500 font-bold text-white text-center pb-20">Inovativ, Kompeten, Siap Kerja</h1>
            </div>
            <div>
              <img src="/public/BA.png" class="w-auto h-[600px] self-end mx-auto" alt="">
            </div>
          </div>
          
        </div>
      </div>
  </div>

</section></template>