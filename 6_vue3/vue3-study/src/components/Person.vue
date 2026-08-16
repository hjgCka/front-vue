<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>

        <img v-for="(pic,index) in picList" :src="pic" :key="index">
        <br>
        <button @click="getPic">再来一个图片</button>
    </div>
</template>

<script setup lang="ts">
    import useLifelogic from '@/hooks/useLifecycle'
    import useSum from '@/hooks/useSum'
    import usePic from '@/hooks/usePic'
    
    useLifelogic()

    const {sum, bigSum, add} = useSum()
    const {picList, getPic} = usePic()
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

    img {
        width: 200px;
        height: 300px;
        margin-left: 10px;
    }
</style>