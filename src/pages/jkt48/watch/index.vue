<script setup>
import formatStarted from '../../../utils/formatStarted';
</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20 p-3">
      <!-- Video player dan informasi -->
      <div v-if="data" class="flex flex-col md:flex-row gap-3">
        <div class="w-full md:w-2/3 flex flex-col gap-3">
          <VideoPlayer class="w-full rounded-2xl" :options="videoOptions" />
          <div class="flex flex-row gap-3">
            <img :src="data.image" class="w-1/4 md:w-1/5 rounded-lg" alt="">
            <div class="flex flex-col gap-2">
              <h1 class="text-xl xl:text-3xl font-bold text-dark dark:text-white">{{ data.name }}</h1>
              <div class="flex gap-2">
                <div class="badge bg-red-600 gap-2">{{ formatStarted(data.started_at) }}</div>
                <div class="badge bg-blue-500 gap-2">Views: {{ info.views }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Live Chat -->
        <div class="w-full md:w-1/3 flex flex-col">
          <div class="bg-gray-50 dark:bg-dark-1 p-3 w-full h-[491px] shadow-3xl rounded-2xl">
            <h1 class="text-xl font-bold text-dark dark:text-white">Live Chat</h1>
            <div v-for="comment in comments" :key="comment.user_id">
              <img :src="comment.avatar_url" class="w-10 h-10 rounded-full" alt="">
              <span>{{ comment.name }}:</span>
              <p>{{ comment.comment }}</p>
            </div>
            <!-- Form untuk mengirim komentar baru -->
            <form @submit.prevent="postComment">
              <input v-model="newComment" type="text" class="w-full border rounded-md p-2 mt-2" placeholder="Type your message here...">
              <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2 mt-2">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getJKT48 } from '../../../utils/api/api';
import VideoPlayer from './videoPlayer.vue';
import axios from 'axios';
import formatDate from '../../../utils/formatDate';
import { formatTimeAgo } from '@vueuse/core';

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
      info: null,
      comments: [],
      newComment: ''
    }
  },
  async mounted() {
    const username = this.$route.params.id;
    this.data = await getJKT48(`watch/${username}`);
    const roomId = this.data.room_id;
    const response = await axios.get(`https://sorum.vercel.app/api/lives/info/${roomId}/info`);
    this.info = response.data;
    this.changeSource();
    this.fetchComments(); // Ambil komentar saat komponen dimuat
  },
  methods: {
    changeSource() {
      this.videoOptions.sources = this.data.streaming_url_list.map(
        (urlItem) => {
          return {
            src: urlItem.url,
            type: "application/x-mpegURL",
          };
        }
      );
    },
    async fetchComments() {
      const response = await axios.get('https://sorum.vercel.app/api/lives/comments/509992/comment');
      this.comments = response.data;

      console.log(this.comments);
    },
  }
}
</script>
