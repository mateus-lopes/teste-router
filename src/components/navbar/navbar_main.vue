<template>
    <nav class="w-full">
        <ul class="flex flex-col text-center lg:flex-row lg:justify-center">
            <router-link to="/">
                <li class="cursor-pointer text-lg transition-all xl:hover:bg-white xl:hover:text-cyan-700 hover:bg-primary py-14 bg-gray-700 text-white lg:py-24 lg:px-16 xl:text-gray-800 xl:bg-white xl:py-0 xl:px-6">
                    Página Inicial
                </li>  
            </router-link>
            <router-link to="/categories">
                <li class="cursor-pointer text-lg transition-all xl:hover:bg-white xl:hover:text-cyan-700 hover:bg-primary py-14 bg-gray-700 text-white lg:py-24 lg:px-16 xl:text-gray-800 xl:bg-white xl:py-0 xl:px-6">
                    Gêneros
                </li>
            </router-link>
            <router-link to="/perfil">
                <li class="cursor-pointer text-lg transition-all xl:hover:bg-white xl:hover:text-cyan-700 hover:bg-primary py-14 bg-gray-700 text-white lg:py-24 lg:px-16 xl:text-gray-800 xl:bg-white xl:py-0 xl:px-6">
                    Perfil
                </li>
            </router-link>
            <router-link to="/help">
                <li class="cursor-pointer text-lg transition-all xl:hover:bg-white xl:hover:text-cyan-700 hover:bg-primary py-14 bg-gray-700 text-white lg:py-24 lg:px-16 xl:text-gray-800 xl:bg-white xl:py-0 xl:px-6">
                    Ajuda
                </li>
            </router-link>
        </ul>
    </nav>
</template> 

<style>
    
</style>