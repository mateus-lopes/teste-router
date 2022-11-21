<template>
    <div @click="go_Genre" class="cursor-pointer px-12 py-16 bg-gray-700 hover:bg-primary transition-all ease-in-out text-center rounded-3xl">
        {{genre.name}}
    </div>
</template>

<script>
export default {
    props: {
        genre: Object,
    },
    methods: {
        go_Genre() {
            this.$router.push(`/genre/${this.genre.id}`)
        },
    },
}
</script>