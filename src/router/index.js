import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SML from '../views/SML.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {  path: '/',           name: 'home',           component: HomeView  },
    {  path: '/about',      name: 'about',          component: AboutView },
    {  path: '/SML',        name: 'about',          component: SML }
  ]
})

export default router
