<template>
  <div class="border p-8">
    <p class="text-lg">
      {{ comment.comment }}
    </p>
    <h3 class="mt-2">
      Author:
<<<<<<< HEAD
      <span class="text-cyan-700 underline cursor-pointer">
        {{ author.username}}
      </span>
=======
      <span class="text-cyan-700 underline cursor-pointer">{{
        author.username
      }}</span>
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705
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

<<<<<<< HEAD
=======
<style lang="scss" scoped></style>
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705
