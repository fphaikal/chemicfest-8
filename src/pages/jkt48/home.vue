<script setup>
import formatLongDate  from '../../utils/formatDate'
import formatNumber from '../../utils/formatNumber'

import recentLive from '../../components/jkt48/recentLive.vue';
</script>
<template>
  <div class="relative min-w-0 flex-1 xl:pb-20 p-4">
    <div class="flex flex-row w-full gap-3">
      <div class="flex flex-col w-2/3 gap-5">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold text-dark dark:text-white">LIVE</h1>
          <div v-if="liveStatus" class="grid grid-cols-4 bg-gray-50 dark:bg-dark-1 rounded-xl p-3 gap-3">
            <div v-for="l in live" class="card bg-white dark:bg-dark dark:text-white text-dark shadow-xl h-72rounded-lg" >
              <figure><img :src="l.img" alt=""></figure>
              <div class="card-body p-4 justify-between">
                <div class="flex flex-col">
                  <div class="card-title">{{ l.url }}</div>
                  <div class="card-text">{{ formatLongDate(l.started_at) }}</div>
                </div>
                <a :href="'https://www.showroom-live.com/r/' + l.url" class="btn bg-dark text-white hover:text-dark dark:hover:text-white dark:hover:bg-dark dark:bg-white dark:text-dark h-fit rounded-xl" target="_blank">Watch</a>
              </div>
            </div>
            <div v-for="l in idnLive" class="card bg-white shadow-xl h-72 bg-cover rounded-lg" :style="{ 'background-image': 'linear-gradient(to top, rgba(0,0,0,0.8) , rgba(255,255,255,0)), url(' + l.image + ')' }">
              <figure><img class="p-4 w-28"  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/IDN_Live.svg" alt=""></figure>

              <div class="card-body p-4 justify-end gap-0 text-center text-white">
                <div class="card-title text-xl font-bold justify-center">{{ l.user.name }}</div>
                <div class="card-text">{{ formatLongDate(l.live_at) }}</div>
              </div>
            </div>
          </div>
          <div v-else class="bg-gray-50 dark:bg-dark-1 rounded-xl p-5">
            <p class="text-lg font-semibold text-center text-dark dark:text-white">No live available</p>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <h1 class="text-2xl font-bold text-dark dark:text-white">Jadwal Theater</h1>
          <div class="grid grid-cols-2 gap-2">
            <div v-for="s in scheduleJkt48" class="bg-gray-50 dark:bg-dark-1 p-4 flex-row flex gap-3 rounded-xl">
              <img v-if="s.setlist.name === 'Cara Meminum Ramune'" class="w-1/3 rounded-lg" src="https://res.cloudinary.com/haymzm4wp/image/upload/v1702404446/nixg3rixpjpom3xa0ivf.jpg" alt="">
              <img v-if="s.setlist.name === 'Ingin Bertemu'" class="w-1/3 rounded-lg" src="https://res.cloudinary.com/haymzm4wp/image/upload/v1697224788/uploads/w2zvghwk8tocey8e8xhv.jpg" alt="">
              <img v-if="s.setlist.name === 'Aturan Anti Cinta'" class="w-1/3 rounded-lg" src="https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.75,w_320,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1697224423/uploads/ghr39gkb0fgdejhpppgq.jpg" alt="">
              <div class="flex flex-col gap-1">
                <h1 class="text-dark dark:text-white font-base text-xl">{{ s.setlist.name }}</h1>
                <p class="text-dark dark:text-white font-light text-md">{{ formatLongDate(s.showDate) }}</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <recentLive  />
    </div>
  </div>
</template>

<script>
import { getJKT48, getScheduleJKT48 } from "../../utils/api/api";

export default {
  name: "Live",
  data() {
    return {
      liveStatus: [],
      live: [],
      idnLive: [],
      scheduleJkt48: [],
      recent: null
    };
  },
  async mounted() {
    this.loadLive();
    setInterval(this.loadLive, 1000)

    const scheduleJkt48 = await getScheduleJKT48('schedules?isOnWeekSchedule=true');
    this.scheduleJkt48 = scheduleJkt48;
  },
  methods: {
    async loadLive() {
      const srLive = await getJKT48("now_live?group=jkt48");
      const idnLive = await getJKT48("idn_lives");
      this.live = srLive;
      this.idnLive = idnLive;

      this.liveStatus = this.live.length > 0 || this.idnLive.length > 0;
      const allRecentLive = await getJKT48("recent?sort=date&page=1&filter=all&order=-1&group=jkt48&type=all&perpage=30");
      this.recent = allRecentLive.recents;
    }
  }
};
</script>
