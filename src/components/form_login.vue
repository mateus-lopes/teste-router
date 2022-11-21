<template>
  <div>
    <div>
      <div class="mb-6">
        <label for="email" class="block mb-2 font-medium">Email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="mari_mariana@email.com"
          v-model="email"
          required="true"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 font-medium">Senha</label>
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="password"
          placeholder="*********"
          required="true"
        />
      </div>
      <button
        @click="login()"
        class="text-white hover:bg-gray-900 bg-primary transition-all font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8000/token/", {
          username: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$cookies.set("logged", response.data.access);
          let decoded = jwt_decode(this.$cookies.get("logged"));
          this.$cookies.set("userId", decoded.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
