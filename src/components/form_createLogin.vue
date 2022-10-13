<template>
    <div>
        <form @submit="go_home">
            <div class="mb-6">
                <label for="name" class="block mb-2 font-medium">Nome Completo</label>
                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mari Mariana" required="true">
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 font-medium">Email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="mari_mariana@email.com" required="true">
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 font-medium">Senha</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*********" required="true">
            </div>
            <div class="mb-6">
                <label for="confirm_pass" class="block mb-2 font-medium">Confirme sua Senha</label>
                <input type="password" id="confirm_pass" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*********" required="true">
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Tenho mais de 18 anos</label>
            </div>
            <button type="submit" class="text-white hover:bg-gray-900 bg-primary transition-all font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Entrar</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            go_home() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>