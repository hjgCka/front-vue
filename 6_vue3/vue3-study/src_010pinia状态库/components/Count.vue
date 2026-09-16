<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}，十倍为：{{ bigSum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import { storeToRefs } from 'pinia'

    // 导入命名导出
    import {useCountStore} from '@/store/count'

    const countStore = useCountStore()

    // 只会关注数据，而不会拿出方法
    const {sum, bigSum} = storeToRefs(countStore)

    let n = ref(1)

    function add() {
        // 第一种方式直接改
        // countStore.sum += n.value

        // 第二种方式，通过$patch批量修改多个属性
        // countStore.$patch({
        //     sum: n.value
        // })

        // 第三种方式，通过action修改
        countStore.increment(n.value)
    }
    function minus() {
        // countStore.sum -= n.value;
        sum.value -= n.value;
    }
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select, button {
    margin: 0 5px;
    height: 25px;
}
</style>