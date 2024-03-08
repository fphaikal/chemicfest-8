<template>
  <div class="realtive xl:pb-20 flex-1 min-h-screen min-w-0">
    <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
      <div class="w-full flex flex-row">
        <h1 class="text-3xl font-black text-dark dark:text-white my-auto">Galeri</h1>
      </div>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-4 p-5">
      <div v-for="p in data" class="w-full h-full">
        <img v-if="p.ImageUrl" :src="p.ImageUrl" class="object-cover w-full h-full rounded-lg" loading="lazy" alt="">
        <div v-else class="skeleton w-auto h-52 bg-dark"></div>

      </div>
    </div>
  </div>
</template>

<script>
import { getAll } from "../utils/api/api";

export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    try {
      setTimeout(() => {
        this.getPhoto();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getPhoto() {
      try {
        this.data = await getAll('get/gallery');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>