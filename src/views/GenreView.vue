<script>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Title from "../components/title.vue";
import Card_movie from "../components/card_movie.vue";
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
      allMovies: "",
      genre: "",
    };
  },
  components: {
    Navbar_comp,
    Title,
    Card_movie,
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
            this.genre = response.data.genres.filter(
                (genre) => {
                    return genre.id == this.$route.params.id
                }
            )[0];
        }
    );
    
    axios
        .get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${this.$route.params.id}&page=1&language=pt-br`)
        .then((response) => {
            this.allMovies = response.data.results;
        }
    );
  },
};
</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      <div class="pt-8">
        <Title>
          {{ genre.name }}
        </Title>
      </div>
        <div class="container pt-4 mx-auto flex text-white flex-wrap justify-left gap-4 overflow-hidden">
            <article v-for="movie in allMovies">
              <Card_movie :movie="movie" />
            </article>
        </div>
    </section>
    <Footer></Footer>
  </main>
</template>
