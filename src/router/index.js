import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VAE from '../views/VAE.vue'
import SML from '../views/SML.vue'
import AquaSynchro from '../views/AquaSynchro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {  path: '/',                   name: 'home',                   component: HomeView  },
    {  path: '/VAE',                name: 'VAE',                    component: VAE },
    {  path: '/SML',                name: 'SML',                    component: SML },
    {  path: '/AquaSynchro',        name: 'about',                  component: AquaSynchro }
  ]
})

export default router
