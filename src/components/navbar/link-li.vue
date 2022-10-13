<template lang="">
    <li class="text-xl" >
        <slot>

        </slot>
        {{content}}
    </li>   
</template>

<script>
export default {
    props: {
        content: String,
        url: String,
    },
    methods: {
    }
}
</script>