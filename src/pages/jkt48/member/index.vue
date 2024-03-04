<script setup>
import formatDate from "../../../utils/formatDate";
</script>

<template>
  <div class="relative min-w-0 flex-1 xl:pb-20">
    <div v-if="member && roomSr" class="flex flex-col gap-3">
      <div class="h-40 md:h-72 overflow-hidden">
        <img class="object-cover object-top w-full my-auto" :src="member.banner || 'https://pbs.twimg.com/media/F8K8jzMawAEhy3a.jpg:large'"/>
      </div>
      <div class="mx-auto w-32 h-32 md:w-40 md:h-40 relative -mt-24 border-8 border-white dark:border-dark rounded-full overflow-hidden">
        <img class="object-cover object-center" :src="member.img_alt"/>
      </div>
      <div class="text-center">
        <h1 class="text-dark dark:text-white font-bold text-4xl">{{ member.name }}</h1>
        <p class="text-gray-500 text-lg">{{ getGen(member.generation) }}</p>
      </div>
      <div class="flex flex-col gap-3 p-5 pt-2">
        <div class="grid md:grid-flow-col md:auto-cols-auto gap-4 bg-gray-50 dark:bg-dark-1 p-5 rounded-2xl">
          <div class="gap-2 flex flex-col text-center mx-auto">
            <h1 class="flex text-dark dark:text-white gap-1 font-light text-md"><Icon icon="fxemoji:birthdaycake" width="20"/>Tanggal Lahir</h1>
            <p class="text-dark dark:text-white font-semibold text-xl">{{ formatDate(member.birthdate) }}</p>
          </div>
          <div class="gap-2 flex flex-col text-center mx-auto">
            <h1 class="flex text-dark dark:text-white gap-1 font-light text-md"><Icon icon="twemoji:drop-of-blood" width="20"/>Golongan Darah</h1>
            <p class="text-dark dark:text-white font-semibold text-xl">{{ member.bloodType || '-' }}</p>
          </div>
          <div class="gap-2 flex flex-col text-center mx-auto">
            <h1 class="flex text-dark dark:text-white gap-1 font-light text-md"><Icon icon="emojione-v1:straight-ruler" width="20"/>Tinggi Badan</h1>
            <p class="text-dark dark:text-white font-semibold text-xl">{{ member.height || '-'}}</p>
          </div>
          <div v-if="member.showroom_exist" class="gap-2 flex flex-col text-center mx-auto">
            <h1 class="flex text-dark dark:text-white gap-1 font-light text-md"><Icon icon="mingcute:user-follow-fill" style="color: #00aaff" width="20"/>Pengikut Showroom</h1>
            <p class="text-dark dark:text-white font-semibold text-xl">{{ formatNumber(roomSr.follower) || '-' }}</p>
          </div>
        </div>
        <div v-if="member.showroom_exist" class="flex flex-col bg-gray-50 dark:bg-dark-1 p-5 rounded-2xl gap-2">
          <div class="flex my-auto gap-2">
            <Icon class="my-auto" icon="flat-color-icons:info" width="25" />
            <span class="my-auto text-2xl font-bold text-dark dark:text-white">Personal Info</span>
          </div>
          <p class="text-lg font-light text-dark dark:text-white font-signika" style="white-space: pre-line;">{{ member.description.replace(/<br>/g, '<br/>')}}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getJKT48 } from "../../../utils/api/api";
import { Icon } from "@iconify/vue";
import formatNumber from "../../../utils/formatNumber";

export default {
  data() {
    return {
      member: null,
      roomSr: null,
      gen: {
        "gen3-jkt48": "Generasi 3",
        "gen6-jkt48": "Generasi 6",
        "gen7-jkt48": "Generasi 7",
        "gen8-jkt48": "Generasi 8",
        "gen9-jkt48": "Generasi 9",
        "gen10-jkt48": "Generasi 10",
        "gen11-jkt48": "Generasi 11",
        "gen12-jkt48": "Generasi 12",
      },
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.member = await getJKT48(`member/${id}`);

    if(this.member.showroom_exist) {
      this.roomSr = await getJKT48(`profile?room_id=${this.member.showroom_id}`)
    } else {
      this.roomSr = "Nodata"
    }
  },
  methods: {
    getGen(gen) {
      if(gen in this.gen){
        return this.gen[gen]
      } else {
        return gen
      }
    }
  },
  components: {Icon},
};
</script>
