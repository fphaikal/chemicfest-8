<script setup>
import formatDate from "../utils/formatDate";
import { Icon } from "@iconify/vue";
</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20">
      <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
        <div class="w-full flex flex-row">
            <h1 class="text-2xl font-black text-dark dark:text-white">Profile</h1>
        </div>
      </div>
      <div class="flex  mt-6 mx-8">
        <img class="rounded-full shadow-xl" src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png" width="150" alt="">
        <div v-if="user" class="flex flex-col ms-5">
          <h1 class="text-3xl font-bold mt-4 flex text-dark dark:text-white">{{ user.Name }}</h1>
          <p class="text-xl font-base flex text-[#536471]">{{ user.Username }}</p>
          <p class="text-lg font-base flex mt-6 text-[#536471] my-auto"><Icon class="my-auto me-2" width="22" icon="lets-icons:date-fill" />Bergabung {{ formatDate(user.Created_At) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getUser } from "../utils/api/api";

export default {
  data() {
    return {
      user: [],
    };
  },
  async mounted() {
    try {
      const uuid = localStorage.getItem("uuid");

      this.user = await getUser(`uuid=${uuid}`);

      console.log(this.user);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
../utils/formatLongDate