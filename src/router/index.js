import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '/layouts/default.vue'
import HomeView from '../pages/home.vue'
import AboutView from '../pages/about.vue'
import LoginView from '../pages/login.vue'
import ShopView from '../pages/shop.vue'
import GalleryView from '../pages/gallery.vue'
import ProfileView from '../pages/profile.vue'
import BuyTicketView from '../pages/buyTicket.vue'

// Admin Page
import AdminView from '../pages/admin/admin.vue'
import DatabaseView from '../pages/admin/database.vue'

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
          name: 'buyticket',
          path: 'buyticket',
          component: BuyTicketView,
        },

        // Need to be protected
        {
          path: 'admin',
          name: 'admin',
          component: AdminView,
          beforeEnter: (to, from, next) => {
            const sessionId = document.cookie.match(/sessionId=([^;]+)/i)[1];
            const role = localStorage.getItem('role')

            if (sessionId && role !== 'admin') {
              next('/login')
            } else {
              next()
            }
          },
        },
        {
          path: 'database',
          name: 'database',
          component: DatabaseView,
          beforeEnter: (to, from, next) => {
            const sessionId = document.cookie.match(/sessionId=([^;]+)/i)[1];
            const role = localStorage.getItem('role')

            if (sessionId && role !== 'admin') {
              next('/login')
            } else {
              next()
            }
          },
        },
        
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView,
          beforeEnter: (to, from, next) => {
            const sessionId = localStorage.getItem('sessionId')

            if (sessionId) {
              next()
            } else {
              next('/login')
            }
          },
        },
      ] 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        const sessionId = localStorage.getItem('sessionId')

        if (sessionId) {
          next('/')
        } else {
          next()
        }
      }
    },

  ]
})

export default router
