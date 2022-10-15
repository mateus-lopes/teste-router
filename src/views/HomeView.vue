<script setup>
import Navbar_comp from '../components/navbar/navbar_comp.vue';
import Title from '../components/title.vue';
import Lista_filmes from '../components/lista_filmes.vue';
import Footer from '../components/footer.vue';

const db = [
  {
    'id': 0,
    'title': 'Recentes de Bilheteria',
    'movies': [
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
    ]
  },
  {
    'id': 0,
    'title': 'Ação e Aventura',
    'movies': [
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
    ]
  },
  {
    'id': 0,
    'title': 'Terror',
    'movies': [
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
      {
        'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
      },
    ]
  },
]
</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      <article class="mt-8" v-for="category in db">
        <Title>
          {{ category.title }}
        </Title>
        <div class="w-full pt-4">
          <Lista_filmes :movies="category.movies">
          </Lista_filmes>
        </div>
      </article>
    </section>
    <Footer></Footer>
  </main>
</template>
