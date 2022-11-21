<script>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Title from "../components/title.vue";
<<<<<<< HEAD
import Movies_List from "../components/movies_list.vue";
=======
import Lista_filmes from "../components/lista_filmes.vue";
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705
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
    Movies_List,
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
<<<<<<< HEAD
=======

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
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705
</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      <article class="mt-8" v-for="genre in allGenres.genres">
        <Title>
          {{ genre.name }}
        </Title>
        <div class="w-full pt-4">
<<<<<<< HEAD
          <Movies_List :genre_id="genre.id"> </Movies_List>
=======
          <Lista_filmes :genre_id="genre.id"> </Lista_filmes>
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705
        </div>
      </article>
    </section>
    <Footer></Footer>
  </main>
</template>
