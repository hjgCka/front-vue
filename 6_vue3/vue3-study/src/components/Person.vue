<template>
    <div class="person">
        <h2>姓名：{{ p1.name }}</h2>
        <h2>年龄：{{ p1.age }}</h2>

        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {type PersonInter, type Persons} from '@/types'
    let person:PersonInter = {id:'1213', name: '张三', age: 60}

    // let personList:Array<PersonInter> = [
    //     {id:'1213', name: '张三', age: 60},
    //     {id:'1213', name: '张三', age: 60},
    //     {id:'1213', name: '张三', age: 60}
    // ]
    let personList:Persons = [
        {id:'1213', name: '张三', age: 60},
        {id:'1214', name: '李四', age: 60},
        {id:'1215', name: '王五', age: 60}
    ]

    let p1 = ref(person)
    let list = ref(personList)
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