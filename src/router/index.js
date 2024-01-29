import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '/layouts/default.vue'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'layout',
      component: defaultLayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
      ] 
    },
  ]
})

export default router
