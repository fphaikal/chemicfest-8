<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20">
      <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
        <div class="w-full flex flex-row">
          <h1 class="text-2xl font-black text-dark dark:text-white">Member</h1>
        </div>
      </div>
      <div class="flex p-8">
        <div class="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
          <RouterLink  :to="'member/profile/' + m.url"  v-for="m in member" class="card bg-slate-50 dark:bg-dark-1 ">
            <div class="p-4 md:p-10">
              <div class="mx-auto w-16 h-16 md:w-40 md:h-40 relative rounded-full overflow-hidden">
                <img class="object-cover object-center" :src="m.img_alt"/>
              </div>            
            </div>  
            <div class="card-body mx-center text-center gap-3 pt-0 md:pt-5">
              <h1 class="card-title justify-center text-lg md:text-3xl font-bold text-dark dark:text-white ">{{ m.nicknames[0] }}</h1>
              <div class="flex flex-row justify-center gap-1 md:gap-2" >
                <a v-for="social in m.socials" :href="social.url" target="_blank"> 
                  <Icon v-if="social.title === 'X' || social.title === 'Twitter'" icon="mingcute:twitter-fill" width="24" class="dark:text-white text-dark w-5 h-5 md:w-6 md:h-6" />
                  <Icon v-if="social.title === 'Instagram'" icon="mdi:instagram" width="24" class="dark:text-white text-dark w-5 h-5 md:w-6 md:h-6" />
                  <Icon v-if="social.title === 'TikTok'" icon="ic:baseline-tiktok" class="dark:text-white text-dark w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import { getJKT48 } from "../../utils/api/api";
export default {
    name: "Member",
    data() {
        return {
            member: [],
        };
    },
    async mounted() {
        const allMembers = await getJKT48('member?group=jkt48');
        this.member = allMembers.filter(m => !m.is_graduate && m.name !== 'JKT48' && m.name !== 'Freya Jayawardana');
    },
    computed: {
        filteredMembers() {
            return this.members;
        }
    },
    components: { Icon }
};
</script>
