<script setup>
    const register = async () => {
        const email = "falestiodua@email.com"
        const password = "password"
        const credentials = await useCreateUser(email, password)
        console.log(credentials)
    }

    const login = async () => {
        console.log("---LOGIN---")
        const email = "falestio@email.com"
        const password = "password"
        const credentials = await useLogin(email, password)
        console.log(credentials)
    }
</script>

<template>
    <div>
        <the-menu></the-menu>
        <button class="btn" @click="register()">register</button>
        <button class="btn" @click="login()">login</button>
    </div>
</template>