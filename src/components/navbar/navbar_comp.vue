<script>
import NavbarMain from "./navbar_main.vue";
import Navbar_main from "./navbar_main.vue";
import axios from "axios";

export default {
  data() {
    return {
      navbar: {
        css: "hidden w-1 h-1",
        open_menu: false,
      },
      is_logged: this.$cookies.get("logged"),
      user_id: this.$cookies.get("userId"),
      user: {},
    };
  },
  components: {
    NavbarMain,
    Navbar_main,
  },
  methods: {
    toogle_navbar() {
      console.log("toogle_navbar activate");
      this.navbar.css = this.navbar.key ? "hidden w-1 h-1" : " ";
      this.navbar.key = this.navbar.key ? false : true;
    },
  },
  mounted() {
    axios
      .get(
        `http://localhost:8000/watchers/${this.user_id}`,
        (Headers = {
          headers: {
            Authorization: `Bearer ${this.is_logged}`,
          },
        })
      )
      .then((response) => {
        console.log(response.data);
        this.user = response.data;
      })
      .catch((error) => {
        if ((error.status = 401)) {
          $cookies.remove("logged");
          $cookies.remove("userId");
          this.$router.push("/login");
        }
      });
  },
};
</script>
<template>
  <section class="shadow-lg md:py-5 lg:py-3 bg-white">
    <header class="flex items-center px-10 lg:px-32 py-3 text-gray-600 m-0">
      <div class="flex justify-between w-full items-center gap-8">
        <div class="flex lg:w-full xl:w-6/12 gap-8 items-center">
          <router-link to="/" class="h-8">
            <img src="../../assets/img/logo-inline.png" alt="" />
          </router-link>
          <div class="w-full hidden lg:block">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only"
                >Search</label
              >
              <div class="relative flex items-center">
                <input
                  type="search"
                  id="default-search"
                  class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Pesquisar..."
                  required=""
                />
                <button
                  type="submit"
                  class="text-white w-12 h-12 ml-3 hover:bg-cyan-700 transition-all bg-primary flex items-center justify-center focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm px-4 py-2"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex items-center">
          <div class="hidden xl:block mr-4">
            <Navbar_main></Navbar_main>
          </div>
          <div v-if="is_logged">Seja bem vindo, {{ user.username }}</div>
          <router-link v-else to="/login">
            <button
              class="px-5 lg:px-7 py-3.5 hover:bg-cyan-700 transition-all bg-primary text-white rounded-3xl"
            >
              Entrar
            </button>
          </router-link>
          <button
            @click="toogle_navbar"
            class="text-gray-900 ml-6 lg:ml-3 items-center xl:hidden"
          >
            <button
              class="hidden lg:block px-4 py-3 border-2 text-sm rounded-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <span class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>
          <div
            :class="navbar.css"
            class="transition-all w-full h-screen z-10 fixed top-0 right-0 bg-white"
          >
            <div class="py-9 flex justify-center items-center">
              <img src="../../assets/img/logo-inline.png" alt="" />
            </div>
            <div
              class="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0"
            >
              <NavbarMain :nav_inline="false" />
            </div>
            <div
              class="flex justify-center items-center w-full fixed bottom-0 left-0"
            >
              <div>
                <a
                  @click="toogle_navbar"
                  href="#"
                  class="text-2xl pb-8 flex justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<style scoped>
.bi {
  font-size: 24px;
}
.nav-icon {
  font-size: 38px;
}
</style>
