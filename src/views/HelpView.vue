<script setup>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Footer from "../components/footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const logged = $cookies.get("logged");
if (!logged) {
  router.push("/login");
}
</script>

<template>
  <main class="pt-14 md:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3 mt-10 flex-col justify-center">
      <h1 class="text-4xl pb-10 text-left">Pagina de Ajuda</h1>
    </section>
    <!-- <Footer :key_btn=true /> -->
  </main>
</template>
