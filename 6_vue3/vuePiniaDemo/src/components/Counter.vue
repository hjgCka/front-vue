<template>
    <div>
      <p>original count : {{ store.count }}</p>
      <p>double count : {{ store.doubleCount }}</p>
    </div>
    <div>
        <button @click="increment">increment</button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()

function increment() {
    store.increment()
}
</script>

<style scoped>

</style>