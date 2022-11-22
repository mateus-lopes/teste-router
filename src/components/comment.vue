<template>
  <div class="border p-8">
    <p class="text-lg">
      {{ comment.comment }}
    </p>
    <h3 class="mt-2">
      Author:
      <span class="text-cyan-700 underline cursor-pointer">{{
        author.username
      }}</span>
    </h3>
    <h4 v-if="comment.idWatcher == author.id" @click="delete_comment" class="mt-2 text-red-600 underline cursor-pointer">
        Deletar
    </h4>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      author: {},
      logged:  this.$cookies.get("logged")
    };
  },
  methods: {
    async getAuthor() {
      const response = await axios.get(
        `http://localhost:8000/watchers/${this.comment.idWatcher}`
      );
      return response.data;
    },
    delete_comment() {
      axios.delete(`http://localhost:8000/comments/${this.comment.id}`, (Headers = {
          headers: {
            Authorization: `Bearer ${this.logged}`,
          }
        }))
        window.location.reload(true);
    }
  },
  mounted() {
    this.getAuthor().then((response) => {
      this.author = response;
    });
  },
};
</script>
