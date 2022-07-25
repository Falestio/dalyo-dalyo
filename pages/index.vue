<script setup>
const firebaseUser = useFirebaseUser() || "Null"

</script>

<template>
    <div>
        <pre class="bg-gray-100">
            {{firebaseUser}}
        </pre>
    </div>
</template>