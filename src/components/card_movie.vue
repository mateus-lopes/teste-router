<template>
    <img @click="go_movie" :src="returnImg()" class="hidden md:block lg:hidden cursor-pointer w-full h-80" alt="">
    <img @click="go_movie" :src="returnImg()" class="hidden lg:block cursor-pointer w-full h-72" alt="">
    <img @click="go_movie" :src="returnImg()" class="cursor-pointer md:hidden w-full" alt="">
</template>

<script>
    export default {
        props: {
            movie: Object,
        },
        methods: {
            go_movie() {
                this.$router.push(`/movie/${this.movie.id}`)
            },
            returnImg(){
                return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
            }
        },
    }
</script>