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
            class="w-full p-9 md:p-20 antialiased self-center bg-dark dark:bg-dark-1 text-white dark:text-white rounded-[50px]">
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
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
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