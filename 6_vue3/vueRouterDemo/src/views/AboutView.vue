<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <button @click="goToUser">Go to User999</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goToUser() {
  // 命名的路由，并加上参数，让路由建立 url
  router.push({name: 'user', params:{id: '999'}})
}
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
