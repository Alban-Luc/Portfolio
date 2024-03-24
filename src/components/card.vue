<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from 'vue'
const props = defineProps({
    title: String,
    description: String,
    img: String,
    link: String
})
</script>


<template>
    
    <RouterLink :to="link">
        <div class="w-full bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <div>
                <img class="object-center object-cover h-auto w-full" :src="img" alt="photo">
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">{{ title }}</p>
                <p class="text-base text-gray-400 font-normal">{{ description }}</p>
            </div>
        </div>
    </RouterLink>

</template>