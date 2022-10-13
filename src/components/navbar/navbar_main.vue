<template>
    <nav class="w-full">
        <ul class="flex flex-col text-center lg:flex-row lg:justify-center">
            <router-link to="/">
                <li class="cursor-pointer text-lg xl:text-xl lg:h-96 lg:flex lg:items-center transition-all hover:bg-primary py-14 lg:px-20 xl:px-32 bg-gray-700 text-white">
                    Página Inicial
                </li>  
            </router-link>
            <router-link to="/categories">
                <li class="cursor-pointer text-lg xl:text-xl lg:h-96 lg:flex lg:items-center transition-all hover:bg-primary py-14 lg:px-20 xl:px-32 bg-gray-700 text-white">
                    Gêneros
                </li>
            </router-link>
            <router-link to="/profile">
                <li class="cursor-pointer text-lg xl:text-xl lg:h-96 lg:flex lg:items-center transition-all hover:bg-primary py-14 lg:px-20 xl:px-32 bg-gray-700 text-white">
                    Perfil
                </li>
            </router-link>
            <router-link to="/help">
                <li class="cursor-pointer text-lg xl:text-xl lg:h-96 lg:flex lg:items-center transition-all hover:bg-primary py-14 lg:px-20 xl:px-32 bg-gray-700 text-white">
                    Ajuda
                </li>
            </router-link>
        </ul>
    </nav>
</template> 

<style>
    
</style>