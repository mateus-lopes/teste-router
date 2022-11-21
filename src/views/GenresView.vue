<script>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Title from "../components/title.vue";
import GenreDiv from "../components/genre_div.vue";
import Footer from "../components/footer.vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const logged = $cookies.get("logged");
if (!logged) {
  router.push("/login");
}

export default {
  data() {
    return {
      allGenres: "",
    };
  },
  components: {
    Navbar_comp,
    Title,
    GenreDiv,
    Footer,
  },
  mounted() {
    const apiKey = "8eb4464e6497d821426a806cc6fa4e93";
    const baseUrl = "https://api.themoviedb.org/3";
    
    axios
      .get(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=pt-br`)
      .then((response) => {
        this.allGenres = response.data;
      });
  },
};
</script>

<template>
  <main class="xl:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 pt-3 mt-10 flex-col justify-center">
      <h1 class="text-4xl pb-10 text-center">Todas as Categorias</h1>
      <div
        class="container mx-auto flex text-white flex-wrap rounded-3xl bg-gray-700 overflow-hidden"
      >
        <article class="grow" v-for="genre in allGenres.genres">
          <GenreDiv :genre="genre" />
        </article>
      </div>
    </section>
    <Footer :key_btn=true></Footer>
  </main>
</template>
