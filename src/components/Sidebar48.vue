<script setup>
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isLoggedIn = !!localStorage.getItem('sessionId');

const getAdmin = isLoggedIn ? localStorage.getItem('role') : '';

const isAdmin = getAdmin === 'admin';
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-white dark:bg-dark">
        <li><a><button @click="toggleDark()" class="  dark:text-white text-dark justify-between">
              <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
              <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
            </button></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async logout() {
      const sessionId = document.cookie.match(/sessionId=([^;]+)/i)[1];
      console.log(sessionId);

      try {
        const response = await axios.post('https://chemicfest.site/api/logout', {
          session: sessionId,
        });

        if (response.data.code === 200) {
          document.cookie = 'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          console.log(response.data.message);

          localStorage.removeItem('sessionId');
          localStorage.removeItem('username');
          localStorage.removeItem('role');
          localStorage.removeItem('phone');
          localStorage.removeItem('email');
          localStorage.removeItem('uuid');

          this.$router.push({ name: 'login' });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>