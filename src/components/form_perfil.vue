<template>
    <div>
        <form @submit="save_perfil">
            <div class="hidden" :class="{'py-2 px-4 bg-green-600':key_form}">
                Formulario enviado com sucesso
            </div>
            <div class="mb-6">
                <label for="name" class="block mb-2 font-medium">Nome Completo</label>
                <input v-model="user.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Carregando..." required="true">
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 font-medium">Email</label>
                <input v-model="user.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Carregando..." required="true">
            </div>
            <div class="mb-6">
                <label for="age" class="block mb-2 font-medium">Data de Nascimento</label>
                <input v-model="user.age" type="text" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Carregando..." required="true">
            </div>
            <button type="submit" class="text-white hover:bg-gray-900 bg-primary transition-all font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Salvar</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key_form: false
            }
        },
        props: {
            user: Object
        },
        methods: {
            save_perfil() {
                con
            }
        }
    }
</script>