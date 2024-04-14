import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../pages/login.vue'
import RegisterView from '../pages/register.vue'
import forgotPassword from '../pages/forgot-password.vue'
import changePassword from '../pages/change-password.vue'

import defaultLayout from '/layouts/default.vue'
import HomeView from '../pages/home.vue'
import AboutView from '../pages/about.vue'
import ShopView from '../pages/shop.vue'
import GalleryView from '../pages/gallery.vue'
import ProfileView from '../pages/profile.vue'
import BuyTicketView from '../pages/buyTicket.vue'
import CartView from '../pages/cart.vue'
import TicketView from '../pages/eticket.vue'

import WatchView from '../pages/watch/index.vue'

import UploadView from '../pages/upload.vue'

// Admin Page
import AdminView from '../pages/admin/admin.vue'
import DatabaseView from '../pages/admin/database.vue'
import VerifView from '../pages/admin/verifikasi.vue'

//JKT48
import JKT48Layout from '/layouts/jkt48.vue'
import JKT48HomeView from '../pages/jkt48/home.vue'
import JKT48MemberView from '../pages/jkt48/members.vue'
import JKT48TheaterDetail from '../pages/jkt48/theater/index.vue'
import JKT48ShowroomLive from '../pages/jkt48/watch/index.vue'
import JKT48IdnLive from '../pages/jkt48/watch/idn/index.vue'
import JKT48MemberProfileView from '../pages/jkt48/member/index.vue'

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
          path: 'Upload',
          name: 'Upload',
          component: UploadView
        },
        {
          name: 'buyticket',
          path: 'buyticket',
          component: BuyTicketView,
        },
        {
          name: 'cart',
          path: 'cart',
          component: CartView,
          beforeEnter: (to, from, next) => {
            const sessionId = localStorage.getItem('sessionId')

            if (sessionId) {
              next()
            } else {
              next('/login')
            }
          },
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
          path: 'verifikasi',
          name: 'verifikasi',
          component: VerifView,
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
          path: 'eticket',
          name: 'eticket',
          component: TicketView,
          beforeEnter: (to, from, next) => {
            const sessionId = localStorage.getItem('sessionId')

            if (sessionId) {
              next()
            } else {
              next('/login')
            }
          },
        },
        {
          path: 'watch',
          name: 'watch',
          component: WatchView,
          beforeEnter: (to, from, next) => {
            const sessionId = localStorage.getItem('sessionId')
            const ticket = localStorage.getItem('ticket')
            
            if (sessionId && ticket > 0) {
              next()
            } else {
              next('/login')
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
      path: '/jkt48',
      name: 'jkt48Layout',
      component: JKT48Layout,
      children: [
        {
          path: '',
          name: 'jkt48',
          component: JKT48HomeView
        },
        {
          path: 'member',
          name: 'member',
          component: JKT48MemberView
        },
        {
          path: 'theater/:id',
          name: 'theater',
          component: JKT48TheaterDetail
        },
        {
          path: 'watch/:id',
          name: 'watch48Sr',
          component: JKT48ShowroomLive
        },
        {
          path: 'watch/idn/:id',
          name: 'watch48Idn',
          component: JKT48IdnLive

        },
        {
          path: 'member/profile/:id',
          name: 'memberProfile',
          component: JKT48MemberProfileView
        }
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
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      name: 'forgotPassword',
      path: '/forgot-password',
      component: forgotPassword,
    },
    {
      name: 'changePassword',
      path: '/reset-password/:uuid',
      component: changePassword,
    },
  ]
})

export default router
