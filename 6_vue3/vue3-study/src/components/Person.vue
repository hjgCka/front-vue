<template>
    <div class="person">
        
    </div>
</template>

<script setup lang="ts">
    import {type PersonInter, type Persons} from '@/types'
    let person:PersonInter = {id:'1213', name: '张三', age: 60}

    // let personList:Array<PersonInter> = [
    //     {id:'1213', name: '张三', age: 60},
    //     {id:'1213', name: '张三', age: 60},
    //     {id:'1213', name: '张三', age: 60}
    // ]
    let personList:Persons = [
        {id:'1213', name: '张三', age: 60},
        {id:'1213', name: '张三', age: 60},
        {id:'1213', name: '张三', age: 60}
    ]
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