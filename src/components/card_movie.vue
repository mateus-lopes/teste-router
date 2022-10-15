<template>
    <img @click="go_movie" :src="movie.url_img" class="cursor-pointer w-full" alt="">
</template>

<script>
    export default {
        props: {
            movie: Object,
        },
        methods: {
            go_movie() {
                this.$router.push('/movie')
            }
        }
    }
</script>