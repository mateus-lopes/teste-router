<script>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Footer from "../components/footer.vue";
import Create_comment from "../components/create_comment.vue";
import Comment from "../components/comment.vue";
import axios from "axios";

export default {
  data() {
    return {
      movie: "",
      comments: [],
    };
  },
  methods: {
    returnImg() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    },
    returnReleaseDate() {
      let date = this.movie.release_date;
      console.log(date);
      return date;
    },
  },
  components: {
    Navbar_comp,
    Footer,
    Create_comment,
    Comment,
  },
  async mounted() {
    const logged = $cookies.get("logged");
    if (!logged) {
      this.$router.push("/login");
    }
  
    const apiKey = "8eb4464e6497d821426a806cc6fa4e93";
    const baseUrl = "https://api.themoviedb.org/3";
  
    axios
      .get(
        `${baseUrl}/movie/${this.$route.params.id}?api_key=${apiKey}&language=pt-br`
      )
      .then((response) => {
        console.log(response.data);
        this.movie = response.data;
      });
  
    axios
      .get(
        "http://localhost:8000/comments/",
        (Headers = {
          headers: {
            Authorization: `Bearer ${logged}`,
          },
        })
      )
      .then((response) => {
        // filter comments by movie id
        let comments = response.data.filter(
          (comment) => comment.idMovie == this.movie.imdb_id
        );
        this.comments = comments;
      });
  },
};
</script>

<template>
  <main class="pt-16 md:pt-28 lg:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3">
      <section class="flex flex-col xl:flex-row gap-10 justify-between mt-8">
        <div class="w-full lg:w-4/12 xl:w-4/12 md:flex xl:block">
          <img
            :src="returnImg()"
            class="w-full md:w-3/12 lg:w-full md:mr-8 xl:mr-0 rounded-2xl"
            alt=""
          />
          
        </div>
        <div class="w-full xl:w-9/12">
          <h2 class="text-4xl pb-2">
            {{ movie.title }}
          </h2>
          <p class="text-justify text-lg">
            {{ movie.overview }}
          </p>
          <section class="flex-col xl:block gap-10 mt-4">
            <div>
              <h2 class="text-xl py-4">
                <span class="font-bold">Genêros: </span>
                <span class="genres">
                  <span v-for="genre in movie.genres">
                    <span
                      v-if="
                        genre.name == movie.genres[movie.genres.length - 1].name
                      "
                    >
                      {{ genre.name }}
                    </span>
                    <span v-else> {{ genre.name }}, </span>
                  </span>
                </span>
                {{ movie.author }}
              </h2>
              <h2 class="text-xl py-4">
                <span class="font-bold">Data de Lançamento:</span>
                {{ returnReleaseDate() }}
              </h2>
              <h2 class="text-xl py-4">
                <span class="font-bold">Duração:</span>
                {{ movie.runtime }} minutos
              </h2>
              <h2 class="text-xl py-4">
                <p><b>Língua Original:</b> <span class="uppercase">{{ movie.original_language }}</span></p>
              </h2>
              <h2 class="text-xl py-4">
                <p v-if="movie.adult"><b>Classificação:</b> Adulto</p>
                <p v-else><b>Classificação:</b> Livre</p>
              </h2>
            </div>
          </section>
          <section class="pb-8 pt-4 rounded-3xl overflow-hidden">
            <div class="border rounded-t-3xl p-8 text-lg">
              <Create_comment :movie-id="movie.imdb_id" />
            </div>
            <div>
              <Comment
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment"
              />
            </div>
          </section>
        </div>
      </section>
    </section>
    <Footer :key_btn="true"></Footer>
  </main>
</template>
