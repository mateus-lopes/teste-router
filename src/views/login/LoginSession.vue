<script setup>
import FormLogin from '../../components/form_login.vue';
</script>

<template>
  <main class="w-screen h-screen flex justify-center items-center bg-primary">
    <section class="container max-w-5xl bg-white p-16 pb-0 rounded-3xl shadow-lg">
        <div class="text-center pb-5">
            <!-- <h1 class="text-3xl">Ludimire</h1> -->
            <img src="../../assets/img/logo-inline.png" class="mx-auto pb-4" alt="">
            <p>facilitando a busca por um filme</p>
        </div>
        <FormLogin></FormLogin>
        <div class="flex w-full justify-center my-6">
            <span class="text-sm text-gray-600 underline text-center mr-2">
                <router-link to="/create-user">Não tenho uma Conta</router-link>
            </span>
            <span class="text-sm text-gray-600 underline text-center">
                <router-link to="/lost-password">Esqueci minha senha</router-link>
            </span>
        </div>
        <hr class="w-full border-top my-5">
        <div class="pb-12 pt-0 text-center">
            <span class="block">
                Entrar tambem por:
            </span>
            <a href="http://google.com" target="_blank">
                <img src="../../assets/img/google_icon.png" class="mx-auto pt-6 inline-block" alt="">
            </a>
        </div>
    </section>
  </main>
</template>

<style scoped>
    p {
        letter-spacing: 1px;
    }
</style>
