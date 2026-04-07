<template>
<ul>
    <!-- v-for定义了多个相同名称的具名插槽，但是每个插槽绑定的数据不一样（属性一样） -->
  <li v-for="item in items">
    <slot name="item" v-bind="item"></slot>
  </li>
</ul>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const items = ref([
    {body:'test', username:'Jack', likes: 20},
    {body:'test23', username:'James', likes: 23}
])
</script>

<style scoped>

</style>