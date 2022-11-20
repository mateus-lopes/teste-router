<template>
  <div>
    <form @submit="save_perfil">
      <div class="hidden" :class="{ 'py-2 px-4 bg-green-600': key_form }">
        Formulario enviado com sucesso
      </div>
      <div class="mb-6">
        <label for="name" class="block mb-2 font-medium">Nome de usuário</label>
        <input
          v-model="userInfo.username"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          disabled
          placeholder="Carregando..."
        />
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 font-medium">Email</label>
        <input
          v-model="userInfo.email"
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Carregando..."
          required="true"
          disabled="true"
        />
      </div>
      <div class="mb-6">
        <label for="age" class="block mb-2 font-medium">No site desde:</label>
        <input
          v-model="userInfo.createdAt"
          type="text"
          id="age"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Carregando..."
          disabled="true"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      key_form: false,
      logged: this.$cookies.get("logged"),
      user_id: this.$cookies.get("userId"),
      userInfo: {},
    };
  },
  props: {
    user: Number,
  },
  created() {
    axios
      .get(
        `http://localhost:8000/watchers/${this.user}`,
        (Headers = {
          headers: {
            Authorization: `Bearer ${this.logged}`,
          },
        })
      )
      .then((response) => {
        this.userInfo = response.data;
      })
      .catch((error) => {
        if ((error.status = 401)) {
          $cookies.remove("logged");
          $cookies.remove("userId");
          router.push("/login");
        }
      });
  },
  methods: {
    save_perfil() {
      con;
    },
  },
};
</script>
