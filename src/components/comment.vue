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
  methods: {
    async getAuthor() {
      const response = await axios.get(
        `http://localhost:8000/watchers/${this.comment.idWatcher}`
      );
      return response.data;
    },
  },
  data() {
    return {
      author: {},
    };
  },
  mounted() {
    this.getAuthor().then((response) => {
      this.author = response;
    });
  },
};
</script>

<style lang="scss" scoped></style>
