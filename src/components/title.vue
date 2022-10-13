<template>
    <div>
        <h1 @click="link_to_link" class="cursor-pointer border-l-2 border-gray-400 pl-2 text-3xl">
            <slot></slot>
        </h1>
    </div>
</template>

<script>
    export default {
        props: {
            link: String,
        },
        methods: {
            link_to_link() {
                if(this.link) {
                    return this.$router(this.link)
                }
                else {
                    return false
                }
            }
        }
    }
</script>