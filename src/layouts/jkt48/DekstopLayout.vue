<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from '@iconify/vue';
import { RouterLink } from "vue-router";
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <nav id="nav" class="sticky top-0 shrink-0 h-screen border-r 2xl:w-[275px] dark:border-zinc-700">
    <div class="flex flex-col h-full mx-3 justify-between">
      <div class="flex-1 flex flex-col gap-3">
        <RouterLink aria-current="page" :to="{name: 'jkt48'}"
          class="mt-4 mb-2.5 text-2xl text-center font-bold text-dark dark:text-white max-2xl:hidden">JKT48 SR</RouterLink>
        <RouterLink aria-current="page" :to="{name: 'jkt48'}"
          class="mt-4 mb-2.5 text-2xl text-center justify-center font-bold text-dark dark:text-white hidden max-2xl:flex">$*</RouterLink>
        <router-link :to="{name: 'jkt48'}" :active-class="isHomeActive ? 'bg-white-1 dark:bg-dark-1 !font-black ' : ''  " aria-label="Home"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isHomeActive ? 'mingcute:home-5-fill' : 'mingcute:home-5-line'" width="28"
            class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Home</div>
        </router-link>
        <router-link v-slot="{isActive}" :to="{name: 'member'}" active-class="bg-white-1 dark:bg-dark-1 !font-black" aria-label="Member"
          class="inline-flex items-center overflow-hidden rounded-full p-3 transition-[background-color] group-hover:bg-hover">
          <Icon :icon="isActive ? 'mingcute:group-3-fill' : 'mingcute:group-3-line'"
            width="28" class="dark:text-white" />
          <div class="ml-5 mr-4 text-xl text-dark dark:text-white max-2xl:hidden">Member</div>
        </router-link>
      </div>
      <div class="justify-center my-3 flex flex-col gap-2">
        <RouterLink aria-label="BackToMain" :to="{ name:'home' }" class="py-2 rounded-full flex items-center p-2 justify-center dark:text-white text-dark shadow-lg  bg-slate-50 dark:bg-dark-1">
          <Icon icon="ion:chevron-back-circle" width="25"/>
          <span class="ms-2 max-2xl:hidden">Back To CF#8</span>
          
        </RouterLink>
        <button @click="toggleDark()" aria-label="Toggle Dark Mode" name="theme-toggle"
          class="py-2 rounded-full flex items-center p-2 justify-center dark:text-white text-dark shadow-lg  bg-slate-50 dark:bg-dark-1">
          <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
          <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
        </button>
      </div>
      <div class="border-t-2 py-5 dark:border-zinc-700 flex">
        <div class="flex my-auto bg-white-1 dark:bg-dark-1 w-full rounded-full p-3 justify-center">
          <div class="ml-4 mr-4 text-base text-dark dark:text-white font-semibold max-2xl:hidden self-center ">Made by FPH</div>
        </div>
      </div>
    </div>
  </nav>
  <div class="min-w-0 flex-1 border-e-2 dark:border-zinc-700">
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHomeActive: false,
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
    updateActiveStatus(route) {
      this.isHomeActive = route.name === 'jkt48';
    },
  },
};
</script>