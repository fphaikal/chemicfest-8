<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20 p-3">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="w-full md:w-2/3 flex flex-col gap-3">
          <VideoPlayer class="w-full rounded-2xl" :options="videoOptions" />
          <h1 class="text-4xl font-bold text-dark dark:text-white">Title</h1>
        </div>
        <div class="w-full md:w-1/3 flex flex-col">
          <div class="flex flex-row">
            <div class="bg-gray-50 p-3 w-full h-[491px] shadow-3xl rounded-2xl">
              <h1 class="text-xl font-bold text-dark dark:text-white">Live Chat</h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
        sources: [{
          src: 'https://hls-origin277.showroom-cdn.com/liveedge/ngrp:b5f27792065fe06d8df047cbac3467133a77bf840ad53e231b63b65959993785_all/chunklist_b457233.m3u8',
          type: 'application/x-mpegURL'
        }]
      }
    }
  },
  async mounted() {
  },
  methods: {
    changeSource() {
      this.videoOptions.sources = [{
        src: 'https:// .zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }];
    }
  }
}
</script>