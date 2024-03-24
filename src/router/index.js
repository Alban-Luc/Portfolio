import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VAE from '../views/VAE.vue'
import SML from '../views/SML.vue'
import AquaSynchro from '../views/AquaSynchro.vue'
import Cine from '../views/Cine.vue'
import Tavue from '../views/Tavue.vue'
import Edenio from '../views/Edenio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {  path: '/',                   name: 'home',                   component: HomeView  },
    {  path: '/SML',                name: 'SML',                    component: SML },
    {  path: '/VAE',                name: 'VAE',                    component: VAE },
    {  path: '/AquaSynchro',        name: 'Aqua',                   component: AquaSynchro },
    {  path: '/Cine',               name: 'Cine',                   component: Cine },
    {  path: '/Tavue',              name: 'Tavue',                  component: Tavue },
    {  path: '/Edenio',             name: 'Edenio',                 component: Edenio },
  ]
})

export default router