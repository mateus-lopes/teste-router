<template>
    <img @click="goMovie" :src="returnImg()" class="hidden md:block lg:hidden cursor-pointer w-full h-80" alt="">
    <img @click="goMovie" :src="returnImg()" class="hidden lg:block cursor-pointer w-full h-72" alt="">
    <img @click="goMovie" :src="returnImg()" class="cursor-pointer md:hidden w-full" alt="">
</template>

<script>
    export default {
        props: {
            movie: Object,
        },
        methods: {
            goMovie() {
                this.$router.push(`/movie/${this.movie.id}`)
            },
            returnImg(){
                return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
            }
        },
    }
</script>