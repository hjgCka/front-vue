<template>
    <ul class="news-list">
        <!-- <li>编号：{{ route.query.id }}</li>
        <li>标题：{{ route.query.title }}</li>
        <li>内容：{{ route.query.content }}</li> -->

        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
    </ul>
</template>

<script setup lang="ts">
    import { toRefs } from 'vue'
    import { useRoute } from 'vue-router';
    const route = useRoute()
    // 使用解构赋值
    const {query} = toRefs(route)
</script>

<style scoped>

</style>