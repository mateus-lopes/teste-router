<template>
    <div class="container w-full mt-8 px-10 lg:px-32 py-10 text-sm text-center">
        <button @click="return_to_top" class="text-lg text-white bg-gray-700 hover:bg-primary px-10 py-3 rounded-3xl">
                Retornar ao topo
        </button>
        <img src="../assets/img/logo-inline.png" class="mx-auto mt-8" alt="">
        <p class="pt-5">
            SIGAA | Diretoria de Tecnologia da Informação - (47) 3331-7800 | Copyright © 2006-2022 - UFRN - jboss-sigaa-05.sig.ifc.edu.br.sigaa05 - v4.8.7.j
        </p>
    </div>
</template>

<script setup>
    const return_to_top = () => {
        window.scrollTo(0, 0);
    }
</script>
