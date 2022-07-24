<script setup>
async function logout(){
    useLogout()
}
</script>

<template>
    <div class="flex items-center p-2 bg-slate-400 w-full">
        <div class="dropdown">
            <label tabindex="0" class="btn m-1">Features</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <NuxtLink to="/kanye">Kanye West</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex">
            <NuxtLink to="/"  class="btn">Home</NuxtLink>
            <NuxtLink to="/login"  class="btn">Login</NuxtLink>
            <NuxtLink to="/register" class="btn">Register</NuxtLink>
            <button class="btn">Logout</button>
        </div>
    </div>
</template>