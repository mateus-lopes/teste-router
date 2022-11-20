<script>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Title from "../components/title.vue";
import Lista_filmes from "../components/lista_filmes.vue";
import Footer from "../components/footer.vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      allGenres: "",
    };
  },
  components: {
    Navbar_comp,
    Title,
    Lista_filmes,
    Footer,
  },
  mounted() {
    const apiKey = "8eb4464e6497d821426a806cc6fa4e93";
    const baseUrl = "https://api.themoviedb.org/3";

    const logged = $cookies.get("logged");
    if (!logged) {
      this.$router.push("/login");
    }

    axios
      .get(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=pt-br`)
      .then((response) => {
        this.allGenres = response.data;
      });
  },
};

// const db = [
//   {
//     'id': 0,
//     'title': 'Recentes de Bilheteria',
//     'movies': [
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//     ]
//   },
//   {
//     'id': 0,
//     'title': 'Ação e Aventura',
//     'movies': [
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//     ]
//   },
//   {
//     'id': 0,
//     'title': 'Terror',
//     'movies': [
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//       {
//         'url_img': 'https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto/38adfeea-b28c-4beb-8116-268eaa083311.jpg',
//       },
//     ]
//   },
// ]

// 1 - bilheteria 2
</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      <p class="pt-10">allGenres: {{ !!allGenres }}</p>
      <article class="mt-8" v-for="genre in allGenres.genres">
        <Title>
          {{ genre.name }}
        </Title>
        <div class="w-full pt-4">
          <Lista_filmes :genre_id="genre.id"> </Lista_filmes>
        </div>
      </article>
    </section>
    <Footer></Footer>
  </main>
</template>
