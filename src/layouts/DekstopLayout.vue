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
  <nav id="nav" class="sticky top-0 shrink-0 h-screen border-r 2xl:w-[275px] dark:border-zinc-700" style="z-index: 999;">
    <div class="flex flex-col h-full mx-3 justify-between">
      <div class="flex-1 flex flex-col gap-3">
        <RouterLink aria-current="page" :to="{ name: 'home' }" class="mt-4 text-2xl text-center font-bold text-dark dark:text-white max-2xl:hidden">
          <img src="/text-logo.png" class="mx-auto w-3/4" alt="">
        </RouterLink>
        <RouterLink aria-current="page" :to="{ name: 'home' }" class="mt-4 mb-2.5 text-2xl text-center justify-center font-bold text-dark dark:text-white hidden max-2xl:flex">
          <img src="/8-logo.svg" class="mx-auto w-8" alt="">
        </RouterLink>
        <RouterLink  aria-label="Home" :to="{ name: 'home' }" :active-class="isHomeActive ? 'bg-white-1 dark:bg-dark-1 !font-black ' : ''"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isHomeActive ? 'mingcute:home-5-fill' : 'mingcute:home-5-line'" width="28"
          class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Home</div>
        </RouterLink>
      
        <router-link aria-label="Shop" v-slot="{ isActive }" v-if="!isAdmin" :to="{ name: 'shop' }"
          active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'mingcute:shopping-bag-2-fill' : 'mingcute:shopping-bag-2-line'" width="28"
            class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Shop</div>
        </router-link>
        <router-link aria-label="Gallery" v-slot="{ isActive }" v-if="!isAdmin" :to="{ name: 'gallery' }"
          active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'solar:gallery-bold' : 'solar:gallery-bold-duotone'" width="28"
            class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Gallery</div>
        </router-link>
        <router-link v-slot="{ isActive }" v-if="isAdmin" :to="{ name: 'verifikasi' }"
          active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'heroicons-solid:badge-check' : 'heroicons-outline:badge-check'" width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Verifikasi </div>
        </router-link>
        <router-link v-slot="{ isActive }" v-if="isAdmin" :to="{ name: 'scanQr' }"
          active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'mingcute:qrcode-2-fill' : 'mingcute:qrcode-2-line'" width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Registrasi </div>
        </router-link>
        <router-link v-slot="{ isActive }" v-if="isAdmin" :to="{ name: 'database' }"
          active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'mingcute:coin-2-fill' : 'mingcute:coin-2-line'" width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Database</div>
        </router-link>
        <router-link v-slot="{ isActive }" v-if="isAdmin" :to="{ name: 'admin' }"
          active-class="bg-white-1 dark:bg-dark-1 !font-black"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'eos-icons:admin' : 'eos-icons:admin-outlined'" width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Admin</div>
        </router-link>
        <router-link aria-label="About" v-slot="{ isActive }" :to="{ name: 'about' }" active-class="bg-white-1 dark:bg-dark-1 !font-bold"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'material-symbols:info-rounded' : 'material-symbols:info-outline-rounded'" width="28"
            class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">About</div>
        </router-link>
      </div>
      <div class="justify-center my-3 flex flex-col gap-2">
        <button @click="toggleDark()" name="theme-toggle" aria-label="Toggle Dark Mode"
          class="py-2 rounded-full flex items-center p-2 justify-center dark:text-white text-dark shadow-lg  bg-slate-50 dark:bg-dark-1">
          <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
          <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
        </button>
      </div>
      <div class="border-t-2 py-5 dark:border-zinc-700 flex">
        <router-link aria-label="Login" ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()" v-if="!isLoggedIn" :to="{ name: 'login' }"
          class="flex my-auto bg-white-1 dark:bg-dark-1 w-full rounded-full p-3" > 
          <div class="rounded-full flex items-center 2xl:p-2 p-0 justify-center  text-white">
            <Icon icon="icon-park-solid:people" width="30" /> 
          </div>
          <div class="ml-4 mr-4 text-base text-dark dark:text-white font-semibold max-2xl:hidden self-center ">Login
          </div>
          <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}" class="bg-dark text-white dark:bg-dark-1 dark:text-white border-0 ml-3 block lg:hidden z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
            <div class="p-3">
              Login
            </div>
          </div>
        </router-link>
        <div aria-label="Profile"  ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()" v-else class="flex my-auto bg-white-1 dark:bg-dark-1 w-full rounded-full p-3 dropdown dropdown-top" tabindex="0" role="button" name="Profile">
          <div class="rounded-full flex items-center 2xl:p-2 p-0 justify-center  text-white">
            <Icon icon="icon-park-solid:user" width="30" />
          </div>
          
          <div class="ml-4 mr-4 text-base text-dark dark:text-white  font-semibold max-2xl:hidden self-center">{{  userName }}</div>
          <ul class=" relative dropdown-content z-10 menu p-2 shadow-lg bg-gray-50 dark:text-white dark:bg-dark-1 rounded-box w-56 mb-2">
            <li>
              <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
            </li>
            <li><button @click="logout">Logout</button></li>
          </ul>
          <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}" class="bg-dark text-white dark:bg-dark-1 dark:text-white border-0 ml-3 block lg:hidden z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
            <div class="p-3">
              Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="min-w-0 inset-0 flex-1 border-e-2 dark:border-zinc-700">
    <RouterView />
    
  </div>
</template>

<script>
import axios from 'axios';
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      isHomeActive: false,
      tooltipShow: false

    };
  },
  mounted() {
    this.updateActiveStatus(this.$route);
  },
  watch: {
    $route(to, from) {
      this.updateActiveStatus(to);
    },
  },
  methods: {
    toggleTooltip: function(){
      if(this.tooltipShow){
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "top"
        });
      }
    },
    updateActiveStatus(route) {
      this.isHomeActive = route.name === 'home';
    },

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
          localStorage.removeItem('ticket');
          localStorage.removeItem('have_ticket');

          this.$router.push({ name: 'login' });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>