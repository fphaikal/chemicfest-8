import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue';
import "video.js/dist/video-js.css"

const app = createApp(App)
app.use(router)
app.component('icon', Icon)
app.mount('#app')
