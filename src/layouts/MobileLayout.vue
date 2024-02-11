<script setup>
import { Icon } from '@iconify/vue'
import Sidebar from "../components/Sidebar.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isLoggedIn = !!localStorage.getItem('sessionId');
const userName = isLoggedIn ? localStorage.getItem('username') : '';
const getAdmin = isLoggedIn ? localStorage.getItem('role') : '';

const isAdmin = getAdmin === 'admin';
</script>

<template>
  <div class="w-full min-h-screen">
    <div class="w-full pb-[60px]">
      <RouterView />
      <Sidebar />
    </div>
    <nav class="fixed inset-x-0 bottom-0 border-t-2 bg-slate-50 dark:bg-dark drop-shadow-md dark:border-zinc-700">
      <div class="relative flex h-[70px] px-4 overflow-y-hidden">
        <div class="flex flex-1 flex-col relative min-w-0 items-center">
          <router-link :to="{ name: 'home' }" active-class="active !font-semibold"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon :icon="isHomeActive ? 'mingcute:home-5-fill' : 'mingcute:home-5-line'"
                  class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">Home</div>
            </div>
          </router-link>
        </div>
        <div v-if="isAdmin" class="flex flex-1 flex-col relative min-w-0 items-center">
          <router-link  to="database" active-class="active !font-semibold"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon :icon="isDatabaseActive ? 'mingcute:coin-2-fill' : 'mingcute:coin-2-line'"
                  class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">Database</div>
            </div>
          </router-link>
        </div>

        <div class="flex flex-1 flex-col relative min-w-0 items-center">
          <router-link v-if="!isLoggedIn" :to="{ name:'login' }" active-class="active !font-semibold"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon :icon="isLoginActive ?'iconamoon:profile-fill' : 'iconamoon:profile'" class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">Login</div>
            </div>
          </router-link>
          <router-link v-else :to="{name:'profile'}" active-class="active !font-semibold"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon :icon="isProfileActive ?'iconamoon:profile-fill' : 'iconamoon:profile'" class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">{{ userName }}</div>
            </div>
          </router-link>
        </div>
        <div class="flex flex-1 flex-col relative min-w-0 items-center drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
          <label for="my-drawer-4"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full drawer-content">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center drawer-button">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon icon="mingcute:menu-fill" class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">Menu</div>
            </div>
          </label>
        </div>

      </div>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isHomeActive: false,
      isAboutActive: false,
      isProfileActive: false,
      isDatabaseActive: false,
    };
  },
  watch: {
    $route(to) {
      this.isHomeActive = to.name === 'home';
      this.isAboutActive = to.name === 'about';
      this.isLoginActive = to.name === 'login';
      this.isProfileActive = to.name === 'profile';
      this.isDatabaseActive = to.name === 'database';
    },
  },
};
</script>