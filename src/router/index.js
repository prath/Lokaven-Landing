import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import HostSignup from '@/views/HostSignup.vue'
import GuestSignup from '@/views/GuestSignup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/host-signup',
        name: 'HostSignup',
        component: HostSignup
      },
      {
        path: '/guest-signup',
        name: 'GuestSignup',
        component: GuestSignup
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router