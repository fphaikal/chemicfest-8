<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';

</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20 p-3">
      <div class="flex flex-col gap-3">
        <div class="w-full flex flex-col md:flex-row gap-3">
          <div class="w-full md:w-4/5 p-9 md:p-20 antialiased self-center bg-dark dark:bg-dark-1 text-white dark:text-white rounded-[50px]">
            <div class="text-4xl md:text-5xl lg:text-7xl font-bold mx-auto">Chemicfest #8</div>
            <div class="text-lg md:text-3xl lg:text-xl font-base mx-auto">Enjoy The Show, Let The Retro Flow</div>
            <RouterLink to="buyticket" class="btn mt-5 rounded-2xl">Beli Tiket</RouterLink>
          </div>
          <div class="w-full md:w-1/5 antialiased self-center text-white dark:text-white rounded-[50px]">
            <div class="font-bold mx-auto">
              <VueCountdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds }"
                class="gap-5 text-center  text-dark dark:text-white">
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
      <div class="h-screen">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    const now = new Date();
    const newYear = new Date('2024-05-14T07:00:00.000Z');

    return {
      time: newYear - now,
    };
  },
};
</script>