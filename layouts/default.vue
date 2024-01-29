<template>
    <main class="flex mx-auto max-w-[1630px] dark:bg-dark">
        <component :is="layoutComponent">
            <RouterView />
        </component>
    </main>
</template>

<script>
import { markRaw } from 'vue'; // Import markRaw from Vue

import MobileLayout from '../src/layouts/MobileLayout.vue'; // Sesuaikan dengan path yang benar
import DesktopLayout from '../src/layouts/DekstopLayout.vue'; // Sesuaikan dengan path yang benar

export default {
  data() {
    return {
      layoutComponent: null,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.layoutComponent = window.innerWidth < 640 ? markRaw(MobileLayout) : markRaw(DesktopLayout);
    },
  },
};
</script>