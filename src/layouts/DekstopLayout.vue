<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from '@iconify/vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);


</script>


<template>
  <nav id="nav" class="sticky top-0  shrink-0 h-screen border-r 2xl:w-[275px] dark:border-zinc-700">
    <div class="flex flex-col h-full mx-3 justify-between">
      <div class="flex-1 flex flex-col gap-3">
        <RouterLink aria-current="page" :to="{name: 'home'}"
          class="mt-4 mb-2.5 text-2xl text-center font-bold text-dark dark:text-white max-2xl:hidden">Chemicfest #8</RouterLink>
        <RouterLink aria-current="page" :to="{name: 'home'}"
          class="mt-4 mb-2.5 text-2xl text-center justify-center font-bold text-dark dark:text-white hidden max-2xl:flex">#8</RouterLink>
        <router-link :to="{name: 'home'}" active-class="bg-white-1 dark:bg-dark-1 !font-black  "
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isHomeActive ? 'mingcute:home-5-fill' : 'mingcute:home-5-line'" width="28"
            class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">
            Home</div>
        </router-link>
        <router-link :to="{name: 'about'}" active-class="bg-white-1 dark:bg-dark-1 !font-black"
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
        <a href="/" class="flex my-auto">
          <div class="rounded-full flex items-center p-2 justify-center text-white bg-white-1 dark:bg-dark-1">
            <Icon icon="icon-park-solid:people"  width="30" />
          </div>
          <div class="ml-4 mr-4 text-base text-dark dark:text-white font-semibold max-2xl:hidden">Login</div>
        </a>
      </div>
    </div>
  </nav>
  <div class="min-w-0 flex-1">
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHomeActive: false,
      isAboutActive: false,
    };
  },
  watch: {
    $route(to, from) {
      this.isHomeActive = to.name === 'home';
      this.isAboutActive = to.name === 'about';
    },
  },
};
</script>