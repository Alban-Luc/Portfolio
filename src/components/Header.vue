
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div>
    <header class="bg-white text-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
      <nav class="flex items-center justify-between mx-auto max-w-screen-lg">
        <!-- Logo ou nom du site -->
        <router-link to="/" class="text-2xl font-bold text-logo ml-16">ALBAN</router-link>

        <!-- Menu pour les écrans larges -->
        <ul class="hidden md:flex space-x-14">
          <li><button @click="scrollToSection('a-propos')" class="hover:text-gray-300 text-menu">À propos</button></li>
          <li><button @click="scrollToSection('travaux')" class="hover:text-gray-300 text-menu">Travaux</button></li>
          <li><button @click="scrollToSection('contact')" class="hover:text-gray-300 text-menu">Contact</button></li>
        </ul>

        <!-- Menu pour les écrans mobiles -->
        <button class="md:hidden" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>


      <ul v-if="isMobileMenuOpen" class="md:hidden bg-white absolute w-full top-14 left-0 p-4 shadow-lg rounded">
        <li><button @click="scrollToSection('a-propos')" class="block text-menu mb-4">À propos</button></li>
        <li><button @click="scrollToSection('travaux')" class="block text-menu mb-4">Travaux</button></li>
        <li><button @click="scrollToSection('contact')" class="block text-menu mb-4">Contact</button></li>
      </ul>
    </header>

    <router-view />
  </div>

</template>

