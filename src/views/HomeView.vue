<script setup>
import Card from "@/components/card.vue";
const cards = [
  {
    title: "Share my loc",
    description: "Application",
    img: "SML.png",
    link: "/SML"
  },
  {
    title: "AquaSynchro",
    description: "Application",
    img: "AquaSynchro.png",
    link: "/AquaSynchro"
  },
  {
    title: "Cinephoria",
    description: "UX Design",
    img: "Cine.png",
    link: "/Cine"
  },
  {
    title: "Application VAE",
    description: "UX Design",
    img: "VAE4.png",
    link: "/VAE"
  },
  {
    title: "TaVue",
    description: "UX Design",
    img: "Tavue.png",
    link: "/TaVue"
  },
  {
    title: "Edenio",
    description: "UX Design",
    img: "Edenio.png",
    link: "/Edenio"
  },
  {
    title: "Application VAE",
    description: "UX Design",
    img: "VAE.png",
    link: "/VAE"
  },
]
</script>

<template>
    <div>
       
        
    <!-- Page a propos -->
        <div id="a-propos" class="py-20">
            <h1 class="text-6xl md:text-9xl font-bold">À PROPOS</h1>
            <!-- Le contenu de la section À propos va ici -->
            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col lg:flex-row justify-center lg:justify-between gap-8">
                    <div class="lg:w-7/12 flex justify-center">
                        <img class="w-40 lg:w-60 h-auto mx-auto" src="/src/components/icons/linkedin.png" alt="Moi">
                    </div>
                    <div class="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 pb-4">En bref</h1>
                        <p class="font-normal text-base leading-6 text-gray-600">Actuellement en deuxième année du BUT MMI à Montbéliard, j'explore avec passion le monde du design web, du graphisme, du développement et de la communication. Ma formation et mes expériences m'ont permis de maîtriser des outils tels que la suite Adobe, ainsi que des langages comme HTML et CSS. Je suis motivé et prêt à mettre mes compétences en pratique au sein d'une équipe dynamique et innovante, tout en continuant à apprendre et à évoluer professionnellement.</p>
                    </div>
                </div>
            </div>
        </div>



    <!-- Page travaux --> 

        <div id="travaux" class="py-20">
            <h1 class="text-6xl md:text-9xl font-bold">TRAVAUX</h1>
                <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div class="text-center pb-12">
                        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                            Projets réalisés
                        </h1>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                   
                        <div class="contents">

                            <card v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description" :img="card.img" :link="card.link"/>

                        </div>

                    </div>
                   
                </section>
        </div>



    <!-- Page contact -->

        <div id="contact">
            <h1 class="text-6xl md:text-9xl font-bold ">CONTACT</h1>

                <div class="w-full bg-menu h-screen">
                    <div class="bg-white h-96"></div>
                    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                        <div class="w-full bg-white border-4 border-menu  shadow rounded p-8 sm:p-12 -mt-72">
                            <form action="" method="post">
                                <div class="md:flex items-center mt-12">
                                    <div class="w-full md:w-1/2 flex flex-col">
                                        <label class="font-semibold leading-none text-menu">Nom</label>
                                        <input type="text" class="leading-none text-menu p-3 mt-4 border-0 bg-gray-100 rounded" />
                                    </div>
                                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label class="font-semibold leading-none text-menu">Email</label>
                                        <input type="email" class="leading-none text-menu p-3 mt-4 border-0 bg-gray-100 rounded"/>
                                    </div>
                                </div>
                                <div class="md:flex items-center mt-8">
                                    <div class="w-full flex flex-col">
                                        <label class="font-semibold leading-none text-menu">Objet</label>
                                        <input type="text" class="leading-none text-menu p-3 mt-4 border-0 bg-gray-100 rounded"/>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div class="w-full flex flex-col mt-8">
                                        <label class="font-semibold leading-none text-menu">Message</label>
                                        <textarea type="text" class="h-40 text-base leading-none text-menu p-3 mt-4 bg-gray-100 border-0 rounded"></textarea>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-full">
                                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-menu rounded hover:bg-logo">
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<style>
    /* Titres */
    
    #a-propos {
        text-align: center;
    }
    #travaux {
        text-align: center;
    }
    #contact {
        text-align: center;
    }

    h1 {
        color: white;
        text-shadow: 1px 0 0 #505F98, 0 1px 0 #505F98, 0 -1px 0 #505F98, -1px 0 0 #505F98;
        display: inline-block;
    }

    /* Animation */

    @keyframes scroll {
        0% {
            transform: translate(-12px, 0px);
            opacity: 0;
        }
        75%{
            transform: translate(-12px, 45px);
            opacity: 1;
        }
        100% {
            transform: translate(-12px, 45px);
            opacity: 0;
        }  
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        .text-6xl {
            font-size: 3rem;
        }
        .text-2xl {
            font-size: 1.5rem;
        }
    }

    /* Image Section */
    .image-section {
        margin-top: 20px;
    }

</style>
