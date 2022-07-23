<script setup>
const api = 'https://api.kanye.rest'

const { data } = await useFetch(api)

</script>

<template>
    <div>
        <div class="text-center flex flex-col min-h-screen items-center justify-center">
            <h1 class="text-4xl">{{data.quote}}</h1>
        </div>
    </div>
</template>