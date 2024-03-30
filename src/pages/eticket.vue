<template>
  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data:null,
    }
  },
  async mounted() {
    try {
      const isLoggedIn = !!localStorage.getItem('sessionId');
      const uuid = parseInt(localStorage.getItem('uuid'));

      if (isLoggedIn) {
        const checkTicket = await axios.post('https://chemicfest.site/api/check/have/ticket', {
          users: uuid
        })
        this.data = checkTicket.data
      }

    } catch (error) {
      console.error(error)
    }
  }
}
</script>