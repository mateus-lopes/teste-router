<script setup>
import Navbar_comp from '../components/navbar/navbar_comp.vue';
import Footer from '../components/footer.vue';
import Category from '../components/category.vue';
import axios from 'axios';

const genres = axios.get(`${baseUrl}/movie/${this.$route.params.id}?api_key=${apiKey}&language=pt-br`)

const categories = [
  'Recentes de Bilheteria',
  'Comedia Barata',
  'Ação e Aventura',  
  'Recentes de Bilheteria',
  'Comedia Barata',
  'Ação e Aventura', 
  'Recentes de Bilheteria',
  'Comedia Barata',
  'Ação e Aventura',  
  'Recentes de Bilheteria',
  'Comedia Barata',
  'Ação e Aventura',   
  'Recentes de Bilheteria',
  'Comedia Barata', 
  'Recentes de Bilheteria',
  'Comedia Barata',
  'Ação e Aventura',  
  'Recentes de Bilheteria',
]
  

</script>

<template>
  <main class="xl:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3 mt-10 flex-col justify-center">
      <h1 class="text-4xl pb-10 text-center">
        Todas as Categorias
      </h1>
      <div class="container mx-auto flex text-white flex-wrap rounded-3xl bg-gray-700 overflow-hidden">
        <article class="grow" v-for="category in categories">
          <router-link to="/">
            <Category>
              {{category}}
            </Category>
          </router-link>
        </article>
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>
