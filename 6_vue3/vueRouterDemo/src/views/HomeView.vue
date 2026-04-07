<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goToAbout() {
  router.push('/about')
}
</script>

<template>
  <main>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
  </main>
</template>
