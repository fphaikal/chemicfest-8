<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';

</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20 p-3">
      <div class="flex flex-col gap-3">
        <div class="w-full h-68 flex flex-row">
          <div class="w-3/5 font-bold text-4xl md:text-5xl lg:text-7xl antialiased self-center text-dark dark:text-white">
            Enjoy The Show,<br>Let The Retro Flow
          </div>
          <img class="w-2/5" src="/svg/retro.svg" alt="">
        </div>
      </div>
      <div class="h-screen">
        <VueCountdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds }"
          class="grid grid-flow-col gap-5 text-center auto-cols-max text-dark dark:text-white">
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class=" text-5xl">
              <span>{{ days }}</span>
            </span>
            days
          </div>
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="countdown text-5xl">
              <span :style="`--value:` + hours"></span>
            </span>
            hours
          </div>
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="countdown text-5xl">
              <span :style="`--value:` + minutes"></span>
            </span>
            min
          </div>
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="countdown text-5xl">
              <span :style="`--value:` + seconds"></span>
            </span>
            sec
          </div>
        </VueCountdown>
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
      user: {}, // Initialize user data

    };
  },
};
</script>