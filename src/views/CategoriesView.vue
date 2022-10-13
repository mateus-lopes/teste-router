<script setup>
import Navbar_comp from '../components/navbar/navbar_comp.vue';
import Title from '../components/title.vue';
import Lista_filmes from '../components/lista_filmes.vue';
import Footer from '../components/footer.vue';
import Category from '../components/category.vue';

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
  'Ação e Aventura',  
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
      <div class="flex text-white flex-wrap rounded-3xl bg-gray-700 overflow-hidden">
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
