<script setup>
import { getFirestore } from "@firebase/firestore";

const db = getFirestore()

</script>

<template>
    <div>
        <pre>
            {{db}}
        </pre>
    </div>
</template>