<template>
  <div v-if="data" class="relative min-h-screen min-w-0 flex-1 xl:pb-20">
    <div class="flex flex-col gap-5 text-center">
      <VideoPlayer class="mx-auto text-center " :options="videoOptions" />
    </div>
    <div class="flex flex-row p-5">
      <div class="mx-auto w-32 h-32 md:w-40 md:h-40 relative -mt-24 border-4 border-white dark:border-dark-1 rounded-full overflow-hidden">
        <img class="object-cover object-center" :src="data.user.avatar"/>
      </div>
    </div>
  </div>
</template>

<script>
import { getJKT48 } from '../../../../utils/api/api';
import VideoPlayer from './videoPlayer.vue';

export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: []
      },
      data: null,
    }
  },
  async mounted() {
    const username = this.$route.params.id

    this.data = await getJKT48(`watch/${username}/idn`)
    console.log(this.videoOptions)

    this.changeSource()
  },
  methods: {
    changeSource() {
      this.videoOptions.sources = [{
        src: this.data.stream_url,
        type: "application/x-mpegURL",
      }]
    }
  } 
}
</script>