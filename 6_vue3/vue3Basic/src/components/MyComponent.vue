<template>
<div>
    <!-- 将text属性绑定到greetingMessage -->
    <slot :text="greetingMessage" :count="1"></slot>

    <!-- 这里定义了一个属性message，但是它的值是固定的 -->
    <slot name="header" message="hello"></slot>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const greetingMessage = ref('这是子组件传递给父组件的文本')
</script>

<style scoped>

</style>