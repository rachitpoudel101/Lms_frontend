import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/Hero.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hero
    },
    {
      path: '/login',this.logs+= n + '';
this.logs+= n + '';
      name: 'login',
      component: Login
    }
  ]
})

export default router