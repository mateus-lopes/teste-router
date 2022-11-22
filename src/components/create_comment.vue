<template>
  <div>
    <label for="message" class="block mb-2 text-lg font-medium text-gray-900">
      Deixe sua critica aqui:
    </label>
    <textarea
      id="message"
      rows="4"
      class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
      v-model="message"
      placeholder="Sua Mensagem..."
    ></textarea>
    <button
      @click="createComment()"
      class="bg-cyan-700 mt-4 text-white px-16 py-1 text-center rounded-3xl"
    >
      Enviar
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "",
      autor: this.$cookies.get("userId"),
      logged: this.$cookies.get("logged"),
    };
  },
  props: {
    movieId: "",
  },
  methods: {
    async createComment() {
      const data = {
        idMovie: this.movieId,
        comment: this.message,
        idWatcher: this.autor,
      };
      const response = await axios.post(
        "http://localhost:8000/comments/",
        data,
        (Headers = {
          headers: {
            Authorization: `Bearer ${this.logged}`,
          },
        })
      );        
      window.location.reload(true);
    },
  },
};
</script>
