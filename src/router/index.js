import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '/layouts/default.vue'
import HomeView from '../pages/home.vue'
import AboutView from '../pages/about.vue'
import LoginView from '../pages/login.vue'
import ShopView from '../pages/shop.vue'
import GalleryView from '../pages/gallery.vue'
import AdminView from '../pages/admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'layout',
      component: defaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'shop',
          name: 'shop',
          component: ShopView
        },
        {
          path: 'gallery',
          name: 'gallery',
          component: GalleryView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
        {
          path: 'admin',
          name: 'admin',
          component: AdminView,
          beforeEnter: (to, from, next) => {
            const sessionId = localStorage.getItem('sessionId')
            const role = localStorage.getItem('role')
            console.log(sessionId, role)
            if (sessionId || role === 'admin') {
              next('/login')
            } else {
              next()
            }
          },
        },
      ] 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

  ]
})

export default router
