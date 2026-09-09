<template>
    <ul class="news-list">
        <li>编号：{{ params.id }}</li>
        <li>标题：{{ params.title }}</li>
        <li>内容：{{ params.content }}</li>
    </ul>
</template>

<script setup lang="ts">
    import { toRefs } from 'vue'
    import { useRoute } from 'vue-router';
    const route = useRoute()

    const {params} = toRefs(route)
</script>

<style scoped>

</style>