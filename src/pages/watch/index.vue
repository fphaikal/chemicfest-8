<script setup>
import { Icon } from '@iconify/vue';
import formatLongDate from '../../utils/formatLongDate';
</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20 p-3">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="w-full md:w-2/3 flex flex-col gap-3">
          <VideoPlayer v-if="stream && stream.data.isOnline" class="rounded-2xl" :options="videoOptions" />
          <div v-else class="bg-dark w-full p-5 text-white h-[400px] rounded-xl">
            <h1>Stream Offline</h1>
          </div>
          <!-- <VideoPlayer class="rounded-2xl" :options="videoOptions" /> -->
          <h1 class="text-2xl font-bold text-dark dark:text-white">Chemicfest#8 | Paduan Jiwa Harmoni</h1>
          <div class="p-5 bg-gray-50 dark:bg-dark-1 rounded-xl">
            <p class="text-sm text-dark dark:text-white">Chemicalistronic Festival (CHEMICFEST) #8 Merupakan Festival
              tahunan sebagai sarana hiburan terutama
              untuk Warga SMK-SMTI Yogyakarta dari padatnya rutinitas pembelajaran. Kegiatan ini sebagai wadah untuk
              menampilkan bakat-bakat dari siswa-siswi SMK-SMTI Yogyakarta. Chemicfest juga menjadi ajang bagi
              siswa-siswi
              yang mengikuti ekstrakurikuler untuk memamerkan kreativitas yang mereka miliki. Beberapa Guest Star juga
              turut
              diundang guna memeriahkan CHEMICFEST #8.</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 flex flex-col">
          <div class="flex flex-row">
            <div class="bg-gray-50 dark:bg-dark-1  w-full  shadow-3xl rounded-2xl">
              <div class="p-3 border-b dark:border-zinc-700">
                <h1 class="text-xl font-bold text-dark dark:text-white">Live Chat</h1>
              </div>
              <div class="p-3 overflow-y-auto h-[425px]">
                <div v-for="c in comments" class="chat chat-start">
                  <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                      <img :alt="c.Username" :src="c.Picture" />
                    </div>
                  </div>
                  <div class="chat-header text-dark dark:text-white">
                    {{ c.Username }}
                    <time class="text-xs opacity-50">{{ formatLongDate(c.TimeStamp) }} </time>
                  </div>
                  <div class="chat-bubble bg-white dark:bg-dark text-dark dark:text-white">{{ c.Message }}</div>
                </div>
              </div>
              <div class="p-3 border-t dark:border-zinc-700">
                <label class="input flex items-center gap-2 bg-white dark:bg-dark">
                  <input v-model="comment" @keyup.enter="postComment" name="comment" type="text"
                    class="grow bg-white dark:bg-dark text-dark dark:text-white" placeholder="Kirim Pesan"
                    maxlength="200" required />
                  <button type="submit" @click.prevent="postComment()" class="badge badge-info">
                    <Icon icon="akar-icons:send" class="w-6 h-6 text-dark dark:text-white" />
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoPlayer from './videoPlayer.vue';
import { getAll } from '../../utils/api/api';
import axios from 'axios';

export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        fluid: true,
        muted: true,
        language: 'id',
        poster: 'https://vjs.zencdn.net/v/oceans.png',
        sources: [{
          type: 'application/x-mpegURL',
          //src: 'https://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/rendition/rendition.m3u8?assetId=4328560526001&secure=true&pubId=1719543778001&videoId=4328294689001'
          src: 'https://livenow.chemicfest.site/live/p/index.m3u8'
        }],
      },
      comments: [],
      comment: '',
      stream: null,
    }
  },
  async mounted() {
    try {
      const stream = await axios.get('https://chemicfest.site/api/get/storage/json/stream');
      this.stream = stream.data;

      this.getComments();
      
      setInterval(() => {
        this.getComments();
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getComments() {
      try {
        const comment = await getAll('get/storage/json/comment');
        this.comments = comment.reverse();
      } catch (error) {
        console.error(error);
      }
    },
    async postComment() {
      try {
        const post = await axios.post('https://chemicfest.site/api/user/post/comment', {
          comment: this.comment,
          users: localStorage.getItem('username'),
        });

        if (post.status === 200) {
          const comment = await getAll('get/storage/json/comment');
          this.comments = comment.reverse();
          this.comment = '';
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

