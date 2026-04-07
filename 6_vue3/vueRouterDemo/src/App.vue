<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <h1>路由例子</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <nav>
    <span>
      <RouterLink to="/">Home</RouterLink>
    </span>
    <span style="margin-left: 10px;">
      <RouterLink to="/about">About</RouterLink>
    </span>
    <span style="margin-left: 10px;">
      <RouterLink to="/users/18919">Users/18919</RouterLink>
    </span>
    <span style="margin-left: 10px;">
      <RouterLink to="/users/82983">Users/82983</RouterLink>
    </span>
    <span style="margin-left: 10px;">
      <router-link :to="{ name: 'user', params: { id: '999' } }">User-999</router-link>
    </span>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
