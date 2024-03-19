<template>
    <RouterView/>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      response: null
    };
  },
  async mounted() {
    try {
      if (localStorage.getItem('sessionId') && localStorage.getItem('username')) {
        setInterval(() => { // Simpan ID interval
          this.sessionCheck()

        }, 5000)      
      }
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async sessionCheck() {
      try {
        const sessionId = localStorage.getItem('sessionId')
        const user  = localStorage.getItem('username')
        const isLoggedIn = !!localStorage.getItem('sessionId');
  
        if (sessionId && user) {
          this.response = await axios.post('https://chemicfest.site/api/session/main/check', {
            sessionid: sessionId,
            users: user
          })
          console.log(this.response.data)
        }

      } catch (error) {
        if(error.response.status === 400) {
          document.cookie = 'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

          localStorage.removeItem('sessionId');
          localStorage.removeItem('username');
          localStorage.removeItem('role');
          localStorage.removeItem('phone');
          localStorage.removeItem('email');
          localStorage.removeItem('uuid');
          this.$router.push('/login')
          console.log('Session Expired')
        }
        console.error(error.response.status);
      }      
    }
  }
};
</script>