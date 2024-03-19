<template>
    <RouterView/>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
    };
  },
  async mounted() {
    try {
      if (localStorage.getItem('sessionId') && localStorage.getItem('username')) {
        setInterval(() => { // Simpan ID interval
          this.sessionCheck()

        }, 1000)      
      }
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async sessionCheck() {
      const sessionId = localStorage.getItem('sessionId')
      const user  = localStorage.getItem('username')

      if (sessionId && user) {
        const response = await axios.post('https://chemicfest.site/api/session/main/check', {
          sessionid: sessionId,
          users: user
        })

        this.sessionCheckResponse = response.data;
        console.log(this.sessionCheckResponse)
      }
    }
  }
};
</script>