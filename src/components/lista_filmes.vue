<template>
    <swiper
        class="md:hidden"
        :slides-per-view="1"
        :space-between="25"
        :modules="modules" 
    >
        <swiper-slide v-for="i in movies">
            <a href="#" class="w-full h-full">
                <img :src="i" class="w-full" alt="">
            </a>
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
        <swiper-slide v-for="i in movies">
            <img :src="i" class="w-full" alt="">
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
        <swiper-slide v-for="i in movies">
            <img :src="i" class="w-full" alt="">
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
        <swiper-slide v-for="i in movies">
            <img :src="i" class="w-full" alt="">
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

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        props: {
            movies: Array,
        },
        setup() {
            const swiper = useSwiper();
            return {
                modules: [Navigation, Grid],
                swiper,
            };
        },
    };
</script>

<style>
    .swiper-button-next {
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        top: 0;
        margin: 0;
        right: 0;
        padding: 0 2em;
    }
    .swiper-button-next::after {
        color: #03989E;
    }
    .swiper-button-prev {
        background-color: rgba(0, 0, 0, 0.5);
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