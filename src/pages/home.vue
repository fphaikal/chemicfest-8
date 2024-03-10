<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
import formatNumber from '../utils/formatNumber';
</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20 p-3 flex flex-col gap-5">
      <div class="flex flex-col gap-3">
        <div class="w-full flex flex-col md:flex-row gap-3">
          <div
            class="w-full lg:w-3/4 p-9 md:p-20 antialiased self-center bg-dark dark:bg-dark-1 text-white dark:text-white rounded-[50px]">
            <div class="flex flex-col-reverse md:flex-row justify-between">
              <div class="flex flex-col gap-2 md:w-4/5">
                <div class="text-4xl sm:text-5xl lg:text-7xl font-bold mx-auto md:mx-0">Chemicfest #8</div>
                <div class="text-lg sm :text-3xl lg:text-xl font-base mx-auto md:mx-0">Enjoy The Show, Let The Retro
                  Flow</div>
                <RouterLink to="buyticket" class="btn mt-2 sm:mt-5 rounded-2xl w-fit mx-auto md:mx-0">Beli Tiket
                </RouterLink>
              </div>
              <div
                class="w-full md:w-1/5 antialiased self-center text-white dark:text-white rounded-[50px] mb-7 md:mb-0">
                <div class="font-bold mx-auto">
                  <VueCountdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds }"
                    class="gap-5 text-center">
                    <div class="flex flex-col bg-neutral rounded-box text-neutral-content">
                      <span class="text-7xl lg:text-9xl">
                        <span>{{ days }}</span>
                      </span>
                      Hari
                    </div>
                  </VueCountdown>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 bg-dark rounded-[30px] md:rounded-[50px] carousel ">
            <div class="carousel-item w-1/2 md:w-full">
              <img
                src="https://cdn.idntimes.com/content-images/post/20221006/240418040-898546650751755-6578874132596457644-n-5a78725fd5cba1052741be06216c28f3.jpg"
                class="w-full" alt="Ngatmombilung" />
            </div>
            <div class="carousel-item w-1/2 md:w-full">
              <img src="https://lastfm.freetls.fastly.net/i/u/ar0/62f4cdc47aa7fc0650d14cfd70c66bb7.jpg"
                class="w-full object-cover" alt="Jogja Hip-Hop Foundation" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 mx-20">
        <div class="flex flex-col gap-3">
          <div class="flex flex-row">
            <h1 class="text-3xl font-black text-dark dark:text-white my-auto">Shop</h1>
            <RouterLink to="/shop" class="my-auto relative ms-auto">
              <p>Lihat Selengkapnya ></p>
            </RouterLink>
          </div>
          <div class="flex flex-row gap-3 carousel">
            <div v-for="p in product"
              class="carousel-item card card-compact w-1/5 bg-gray-50 dark:bg-dark-1 text-dark dark:text-white">
              <figure class="aspect-w-1 aspect-h-1"><img :src="p.Picture" class="object-cover" alt="" /></figure>
              <div class="card-body">
                <h2 class=" text-2xl font-bold">{{ p.Name }}</h2>
                <p class="text-lg">Rp. {{ formatNumber(p.Price) }}</p>
                <p>{{ p.Description }}</p>
                <div class="card-actions ">
                  <button @click.prevent="handleAddToCart(p)" class="btn btn-primary w-full rounded-xl">Add To
                    Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import { getAll } from "../utils/api/api";

export default {
  name: 'Home',
  data() {
    const now = new Date();
    const newYear = new Date('2024-05-14T07:00:00.000Z');

    return {
      time: newYear - now,
      product: [],
      gallery: [],
    };
  },
  async mounted() {
    try {
      const shop = await getAll('get/pricelist');
      this.product = shop.Shop

      this.gallery = await getAll('get/gallery');

    } catch (error) {
      console.error(error);
    }
  },
};
</script>