<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from '@iconify/vue';
import { RouterLink } from "vue-router";
const isDark = useDark();
const toggleDark = useToggle(isDark);

const isLoggedIn = !!localStorage.getItem('sessionId');
const userName = isLoggedIn ? localStorage.getItem('username') : '';

const getAdmin = isLoggedIn ? localStorage.getItem('role') : '';

const isAdmin = getAdmin === 'admin';
</script>

<template>
  <nav id="nav" class="sticky top-0 shrink-0 h-screen border-r 2xl:w-[275px] dark:border-zinc-700">
    <div class="flex flex-col h-full mx-3 justify-between">
      <div class="flex-1 flex flex-col gap-3">
        <RouterLink aria-current="page" :to="{name: 'home'}"
          class="mt-4 mb-2.5 text-2xl text-center font-bold text-dark dark:text-white max-2xl:hidden">Chemicfest #8</RouterLink>
        <RouterLink aria-current="page" :to="{name: 'home'}"
          class="mt-4 mb-2.5 text-2xl text-center justify-center font-bold text-dark dark:text-white hidden max-2xl:flex">#8</RouterLink>
        <router-link :to="{name: 'home'}" :active-class="isHomeActive ? 'bg-white-1 dark:bg-dark-1 !font-black ' : ''  "
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isHomeActive ? 'mingcute:home-5-fill' : 'mingcute:home-5-line'" width="28"
            class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Home</div>
        </router-link>
        <router-link :to="{name: 'shop'}" active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isShopActive ? 'mingcute:shopping-bag-2-fill' : 'mingcute:shopping-bag-2-line'"
            width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Shop</div>
        </router-link>
        <router-link :to="{name: 'gallery'}" active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isGalleryActive ? 'solar:gallery-bold' : 'solar:gallery-bold-duotone'"
            width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Gallery</div>
        </router-link>
        <router-link v-if="isAdmin" :to="{name: 'admin'}"  active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isGalleryActive ? 'eos-icons:admin-outlined' : 'eos-icons:admin'"
            width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Admin</div>
        </router-link>
        <router-link :to="{name: 'about'}" active-class="bg-white-1 dark:bg-dark-1 !font-bold"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isAboutActive ? 'material-symbols:info-rounded' : 'material-symbols:info-outline-rounded'"
            width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">About</div>
        </router-link>
      </div>
      <div class="justify-center my-3 flex flex-col gap-2">
        <button @click="toggleDark()"
          class="py-2 rounded-full flex items-center p-2 justify-center dark:text-white text-dark shadow-lg  bg-slate-50 dark:bg-dark-1">
          <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
          <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
        </button>
      </div>
      <div class="border-t-2 py-5 dark:border-zinc-700 flex">
        <router-link v-if="!isLoggedIn" :to="{ name: 'login'}" class="flex my-auto bg-white-1 dark:bg-dark-1 w-full rounded-full p-3">
          <div class="rounded-full flex items-center 2xl:p-2 p-0 justify-center  text-white">
            <Icon icon="icon-park-solid:people"  width="30" />
          </div>
          <div class="ml-4 mr-4 text-base text-dark dark:text-white font-semibold max-2xl:hidden self-center ">Login</div>
        </router-link>

        <div v-else class="flex my-auto bg-white-1 dark:bg-dark-1 w-full rounded-full p-3 dropdown dropdown-top" tabindex="0" role="button">
          <div class="rounded-full flex items-center 2xl:p-2 p-0 justify-center  text-white">
            <Icon icon="icon-park-solid:user"  width="30" />
          </div>
          <div class="ml-4 mr-4 text-base text-dark dark:text-white  font-semibold max-2xl:hidden self-center">{{ userName }}</div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-gray-50 dark:text-white dark:bg-dark-1 rounded-box w-56 mb-2">
            <li><a @click="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="min-w-0 flex-1 px-4">
    <RouterView />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isHomeActive: false,
      isAboutActive: false,
      isShopActive: false,
      isGalleryActive: false,
    };
  },
  watch: {
    $route(to, from) {
      this.isHomeActive = to.name === 'home';
      this.isAboutActive = to.name === 'about';
      this.isShopActive = to.name === 'shop';
      this.isGalleryActive = to.name === 'gallery';
    },
  },
  methods: {
    async logout() {
      const sessionId = document.cookie.match(/sessionId=([^;]+)/i)[1];
      console.log(sessionId);

      try {
        const response = await axios.post('https://chemicfest.site/api/logout', {
          session: sessionId,
        });
  
        if (response.data.code === 200) {
          document.cookie = 'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          console.log(response.data.message);

          localStorage.removeItem('sessionId');
          localStorage.removeItem('username');
          localStorage.removeItem('role');
          localStorage.removeItem('phone');
          localStorage.removeItem('email');
          localStorage.removeItem('uuid');

          this.$router.push({ name: 'login' });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>