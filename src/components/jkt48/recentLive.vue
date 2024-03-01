<script setup>
import formatLongDate  from '../../utils/formatDate'
</script>
<template>
  <div class="flex flex-col w-full sm:w-1/3 gap-2">
    <h1 class="text-2xl font-bold text-dark dark:text-white">Recent Live</h1>
    <div v-if="recent" class="bg-gray-50 dark:bg-dark-1 text-dark dark:text-white rounded-xl p-3 flex flex-col gap-2 ">
      <div v-for="r in recent" class="flex flex-col gap-3 border-b-2 dark:border-zinc-700">
        <div class="flex flex-row gap-1">
          <img class="w-28 rounded-lg mb-2" :src="r.member.img_alt" alt="">
          <div class="flex flex-col gap-2 p-2">
            <h1 class="text-xl font-semibold">{{ r.member.nickname }}</h1>
            <p class="font-base text-md">{{ formatLongDate(r.live_info.date.start) }} - {{
              formatLongDate(r.live_info.date.end, true) }} </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="bg-gray-50 rounded-xl p-3 flex flex-col gap-2">
      <p class="text-lg font-semibold text-center">No recent live available</p>
    </div>
  </div>
</template>

<script>
import { getJKT48 } from "../../utils/api/api";

export default {
  name: "RecentLive",
  data() {
    return {
      recent: null
    };
  },
  async mounted() {
    this.loadRecentLive();
    setInterval(this.loadRecentLive, 1000)
  },
  methods: {
    async loadRecentLive() {
      const allRecentLive = await getJKT48("recent?sort=date&page=1&filter=all&order=-1&group=jkt48&type=all&perpage=5");
      this.recent = allRecentLive.recents;
    }
  }
};
</script>