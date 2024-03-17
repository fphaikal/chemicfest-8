<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
import formatNumber from '../utils/formatNumber';
</script>

<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-24 p-3 flex flex-col gap-5">
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
          <!--
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
        -->
        <div id="default-carousel" class="relative w-1/4 rounded-[50px]" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96 aspect-w-1 aspect-h-1">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://cdn.idntimes.com/content-images/post/20221006/240418040-898546650751755-6578874132596457644-n-5a78725fd5cba1052741be06216c28f3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[50px]" alt="...">
              </div>
              <div class="hidden duration-700 ease-in-out aspect-w-1 aspect-h-1" data-carousel-item>
                <img src="https://lastfm.freetls.fastly.net/i/u/ar0/62f4cdc47aa7fc0650d14cfd70c66bb7.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[50px] object-cover" alt="...">
              </div>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

        </div>
      </div>
      <div class="flex flex-col gap-5 text-center text-dark dark:text-white">
        <h2>Sponsored By:</h2>
        <div x-data="{}" x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');})"
          class="w-full mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul x-ref="logos"
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/J_Trust_Bank_logo.svg/2560px-J_Trust_Bank_logo.svg.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/2560px-Grab_Logo.svg.png"
                class="h-10 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/IDN_Media_Logo.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/0/02/POP_MIE.png"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://seeklogo.com/images/N/nivea-men-logo-BD22C783FB-seeklogo.com.png"
                class="h-16 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://static.wikia.nocookie.net/logopedia/images/9/9a/Chitato.svg"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="../../public/svg/mandiri.svg" class="w-36 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/c/c2/Logo_Wafer_Tango.png" class="h-20 my-auto grayscale hover:grayscale-0" alt="">
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/J_Trust_Bank_logo.svg/2560px-J_Trust_Bank_logo.svg.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/2560px-Grab_Logo.svg.png"
                class="h-10 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/IDN_Media_Logo.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/0/02/POP_MIE.png"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://seeklogo.com/images/N/nivea-men-logo-BD22C783FB-seeklogo.com.png"
                class="h-16 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://static.wikia.nocookie.net/logopedia/images/9/9a/Chitato.svg"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="../../public/svg/mandiri.svg" class="w-36 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/c/c2/Logo_Wafer_Tango.png" class="h-20 my-auto grayscale hover:grayscale-0" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-3 ">
        <div class="flex flex-row">
          <h1 class="text-2xl md:text-3xl font-black text-dark dark:text-white my-auto">Shop</h1>
          <RouterLink to="/shop" class="my-auto relative ms-auto text-dark dark:text-white">
            <p>Lihat Selengkapnya ></p>
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-3">
          <div v-for="p in product"
            class="card card-compact  bg-gray-50 dark:bg-dark-1 text-dark dark:text-white shadow-xl">
            <figure class="aspect-1"><img :src="p.Picture" class="object-cover" alt="" /></figure>
            <div class="card-body gap-0">
              <h2 class="text-lg md:text-2xl font-medium">{{ p.Name }}</h2>
              <p class="text-lg md:text-lg font-bold">Rp. {{ formatNumber(p.Price) }}</p>
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