<script setup lang="ts">
import { useCounterStore } from '~~/store/counter';

const count = useCounterStore()

const useCount = useState('counter', () => 0)

const cookieCount = useCookie<number>('count')

function add1(){
    useCount.value++
}

function saveCookie(){
    cookieCount.value += 20
}

</script>

<template>
    <div>
        <h1 class="text-4xl">This is DaLYO-DaLYO</h1>
        <p class="text-2xl">The Pinia Counter is: {{count.count}}</p>
        <p class="text-2xl">The useState Counter is: {{ useCount }}</p>
        <p class="text-2xl">The cookieCount is: {{ cookieCount }}</p>

        <button class="btn" @click="count.increment()">Add</button>
        <button class="btn" @click="add1()">Add useState</button>
        <button class="btn" @click="saveCookie()">add cookie</button>

    </div>
</template>