<template>
  <div class="relative xl:pb-20 flex-1 min-h-screen min-w-0">
    <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
      <div class="w-full flex flex-row">
        <h1 class="text-3xl font-black text-dark dark:text-white my-auto">Galeri</h1>
      </div>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-4 p-5">
      <div v-for="(p, index) in data" :key="index" class="aspect-w-1 aspect-h-1">
        <img
          v-if="p.ImageUrl"
          :src="p.ImageUrl"
          class="object-cover w-full rounded-lg cursor-pointer"
          loading="lazy"
          alt=""
          @click="showModal(p.ImageUrl)"
        >
      </div>
    </div>
    <!-- Modal -->
    <div v-if="modalImage" class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div class="max-w-3xl w-full p-4">
        <img :src="modalImage" class="object-contain w-full h-auto" alt="">
        <button @click="hideModal" class="absolute top-4 right-4 text-white text-4xl">&times;</button>
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
      modalImage: null,
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
    },
    showModal(imageUrl) {
      this.modalImage = imageUrl;
    },
    hideModal() {
      this.modalImage = null;
    },
  }
};
</script>
