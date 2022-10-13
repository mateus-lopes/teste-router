<script setup>
import Navbar_comp from '../components/navbar/navbar_comp.vue';
import Title from '../components/title.vue';
import Lista_filmes from '../components/lista_filmes.vue';
import Footer from '../components/footer.vue';

const movie = {
    'title': 'O Telefone Preto',
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis praesentium natus ullam provident blanditiis, tempora deleniti explicabo, eum minima beatae porro ipsa pariatur incidunt in at! Earum, voluptatem accusantium!',
    'img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
}

</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      {{movie}}
    </section>
    <Footer></Footer>
  </main>
</template>