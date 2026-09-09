<template>
    <div>
        <h2>欢迎来到Home页面</h2>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    // 编程式路由，3秒后自动跳转到‘新闻’
    onMounted(() => {
        setTimeout(() => {
            // router.push('/news')
        }, 3000);
    })
</script>

<style scoped>

</style>