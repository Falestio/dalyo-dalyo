<script setup>
const router = useRouter()

const email = ref('')
const password = ref('')

async function register(){
    const credentials = await useCreateUser(email.value, password.value)
    console.log(credentials)
}

</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="p-4 rounded w-96 bg-gray-100">
            <h1 class="text-2xl mb-6">Register</h1>
            <div class="flex flex-col gap-4">
                <input type="text" placeholder="Email" class="input input-bordered w-full" v-model="email"/>
                <input type="password" placeholder="Password" class="input input-bordered w-full" v-model="password"/>
                <button class="btn bg-blue-300" @click="register()">Register</button>
            </div>
        </div>
    </div>
</template>