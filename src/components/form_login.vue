<template>
    <div>
        <form @submit="go_home">
            <div class="mb-6">
                <label for="email" class="block mb-2 font-medium">Email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="mari_mariana@email.com" required="true">
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 font-medium">Senha</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*********" required="true">
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