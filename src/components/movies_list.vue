<template>
    <swiper
        class="md:hidden"
        :slides-per-view="1"
        :space-between="25"
        :modules="modules" 
    >
        <swiper-slide v-for="movie in allMovies">
            <Card_movie :movie="movie" />
        </swiper-slide>
    </swiper>
    <swiper
        class="hidden md:block lg:hidden"
        :slides-per-view="3"
        :space-between="25"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="true" 
        :modules="modules" 
    >
        <swiper-slide v-for="movie in allMovies">
            <Card_movie :movie="movie" />
        </swiper-slide>
    </swiper>
    <swiper
        class="hidden lg:block xl:hidden"
        :slides-per-view="4"
        :space-between="25"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="true" 
        :modules="modules" 
    >
        <swiper-slide v-for="movie in allMovies">
            <Card_movie :movie="movie" />
        </swiper-slide>
    </swiper>
    <swiper
        class="xl:block hidden"
        :slides-per-view="6"
        :space-between="25"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="true" 
        :grid="true"
        :modules="modules" 
    >
        <swiper-slide v-for="movie in allMovies">
            <Card_movie :movie="movie" />
        </swiper-slide>
    </swiper>
</template>

<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    import "swiper/css/navigation"; 
    import "swiper/css/grid";
    
    // import required modules
    import { Navigation, Grid } from "swiper";
    import Card_movie from './card_movie.vue';
    import axios from 'axios';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            Card_movie
        },
        props: {
            genre_id: Number,
        },
        setup() {
            const swiper = useSwiper();
            return {
                modules: [Navigation, Grid],
                swiper,
            };
        },
        data() {
            return {
                allMovies: ''
            }
        },
        async mounted() {
            const apiKey = '8eb4464e6497d821426a806cc6fa4e93'
            const baseUrl = 'https://api.themoviedb.org/3'

            axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${this.genre_id}&page=1&language=pt-br`)
                .then((response) => {
                    this.allMovies = response.data.results;
                }
            );
        },
    };
</script>

<style>
    .swiper-button-next {
        background-color: rgba(0, 0, 0, 0.7);
        height: 100%;
        top: 0 ;
        margin: 0;
        right: 0;
        padding: 0 2em;
    }
    .swiper-button-next::after {
        color: #03989E;
    }
    .swiper-button-prev {
        background-color: rgba(0, 0, 0, 0.7);
        height: 100%;
        top: 0;
        margin: 0;
        left: 0;
        padding: 0 2em;
    }
    .swiper-button-prev::after {
        color: #03989E;
    }
</style>