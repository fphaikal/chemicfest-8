<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from '@iconify/vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <div class="w-full min-h-screen">
    <div class="w-full pb-[60px]">
      <RouterView />
    </div>
    <nav class="fixed inset-x-0 bottom-0 border-t-2 bg-slate-50 dark:bg-dark drop-shadow-md dark:border-zinc-700">
      <div class="relative flex h-[70px] px-4 overflow-y-hidden">
        <div class="flex flex-1 flex-col relative min-w-0 items-center">
          <router-link :to="{name: 'home'}" active-class="active !font-semibold"
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
        <div class="flex flex-1 flex-col relative min-w-0 items-center">
          <router-link to="about" active-class="active !font-semibold"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon :icon="isAboutActive ? 'material-symbols:info-rounded' : 'material-symbols:info-outline-rounded'"
                  class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">About</div>
            </div>
          </router-link>
        </div>
        
        <div class="flex flex-1 flex-col relative min-w-0 items-center">
          <router-link to="about" active-class="active !font-semibold"
            class="relative top-1/2 h-20 w-20 shrink-0 -translate-y-1/2 rounded-full">
            <div
              class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-1 bg-hover">
                <Icon icon="icon-park-solid:people"  
                  class="text-dark dark:text-white h-full w-full" />
              </div>
              <div class="shrink-0 text-xs dark:text-white">Profil</div>
            </div>
          </router-link>
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
    };
  },
  watch: {
    $route(to) {
      this.isHomeActive = to.name === 'home';
      this.isAboutActive = to.name === 'about';
    },
  },
};
</script>