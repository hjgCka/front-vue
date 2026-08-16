<template>
    <div class="person">
        <h2>{{ a }}</h2>
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import {type Persons} from '@/types'
    //defineProps(['a', 'list'])
    
    // 定义a和list的类型，a和list是否必传，以及a和list的默认值
    const { a = 'Jack', list = [{id:'11', name:'Mark', age:20}]} = defineProps<{
        a?: string,
        list?:Persons
    }>()
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