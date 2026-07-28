<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <button @click="showLog">点我输出h2</button>
    </div>
</template>

<script setup lang="ts">
    import {ref, useTemplateRef} from 'vue'

    const childRef = useTemplateRef('title2')

    function showLog() {
        // ref在html元素上时，.value输出的是页面上的整个h2元素
        // ref在组件上时，.value返回的是组件实例
        console.log(childRef.value)
    }

    const a = 1
    const b = ref(2)
    // es6的对象属性简写
    defineExpose({
        a,b
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0px 5px;
    }
</style>