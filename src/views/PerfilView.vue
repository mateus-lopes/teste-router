<script setup>
import Navbar_comp from '../components/navbar/navbar_comp.vue';
import Footer from '../components/footer.vue';
import Form_perfil from '../components/form_perfil.vue';

const user = {
    'name': 'Mari Mariana',
    'age': '20/02/2004',
    'email': 'mariana@mari.com',
    'bio': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste adipisci, quos error veniam consectetur ut, animi nihil eius eligendi id, ea aperiam ipsam consequatur sunt pariatur a inventore commodi?',
}
  

</script>

<template>
  <main class="pt-14 md:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3 mt-10 flex-col justify-center">
      <h1 class="text-4xl pb-10 text-left">
        Configurações de Conta
      </h1>
      <div class="lg:flex gap-12">
        <div class="w-full md:w-4/12 xl:4/12">
          <img src="../assets/img/perfil.png" class="w-96 mb-7" alt="">
        </div>
        <div class="w-full md:w-8/12 xl:8/12">
          <Form_perfil :user="user" />
        </div>
      </div>
    </section>
    <Footer :key_btn=true />
  </main>
</template>
