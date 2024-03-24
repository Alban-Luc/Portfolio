import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VAE from '../views/VAE.vue'
import SML from '../views/SML.vue'
import AquaSynchro from '../views/AquaSynchro.vue'
<<<<<<< HEAD
=======
import Cine from '../views/Cine.vue'
import Tavue from '../views/Tavue.vue'
import Edenio from '../views/Edenio.vue'
>>>>>>> 5cd750e (Cards)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {  path: '/',                   name: 'home',                   component: HomeView  },
    {  path: '/VAE',                name: 'VAE',                    component: VAE },
    {  path: '/SML',                name: 'SML',                    component: SML },
<<<<<<< HEAD
    {  path: '/AquaSynchro',        name: 'about',                  component: AquaSynchro }
=======
    {  path: '/AquaSynchro',        name: 'about',                  component: AquaSynchro },
    {  path: '/Cine',               name: 'Cine',                   component: Cine },
    {  path: '/Tavue',              name: 'Tavue',                  component: Tavue },
    {  path: '/Edenio',             name: 'Edenio',                 component: Edenio },
>>>>>>> 5cd750e (Cards)
  ]
})

export default router
