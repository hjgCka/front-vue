<template>
  <div>
    <!-- 当前路由可以通过 $route 在模板中访问 -->
    User {{ $route.params.id }}
  </div>

  <nav>
    <span>
      <!--这里使用了es6的模板字符串语法  -->
      <!-- <RouterLink :to="`${$route.fullPath}/profile`">UserProfile</RouterLink> -->

      <RouterLink :to="'/users/' + route.params.id + '/profile'">UserProfile</RouterLink>
    </span>
    <span style="margin-left: 10px;">
      <!-- <RouterLink :to="$route.fullPath + '/posts'">UserPosts</RouterLink> -->

      <RouterLink :to="'/users/' + route.params.id + '/posts'">UserPosts</RouterLink>
    </span>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    // 对路由变化做出响应...
    console.log('newId=', newId)
    console.log('oldId=', oldId)
  }
)

</script>

<style scoped>

</style>