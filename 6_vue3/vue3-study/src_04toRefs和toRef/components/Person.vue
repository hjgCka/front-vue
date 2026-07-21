<template>
    <div class="person">
        <h2>姓名：{{ person.name }}, {{ name }}</h2>
        <h2>年龄：{{ person.age }}, {{ age }}, {{ a }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup lang="ts">
    import {reactive, toRefs, toRef} from 'vue'

    let person = reactive({
        name: '张三',
        age: 18
    })

    // 和person.name person.age相同
    let {name, age} = toRefs(person)

    let a = toRef(person, 'age')

    // person, age, a 都是ObjectRefImpl
    console.log(person.age, age, a.value)

    function changeName() {
        name.value += '~'
    }
    function changeAge() {
        age.value += 1
    }
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