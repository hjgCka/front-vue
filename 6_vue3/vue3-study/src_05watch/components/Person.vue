<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
        <br>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改person</button>
        <hr>
        <h3>学生姓名：{{ stu.name }}</h3>
        <h3>学生年龄：{{ stu.age }}</h3>
        <button @click="changeStu">修改学生</button>
    </div>
</template>

<script setup lang="ts">
    import {ref, watch, reactive} from 'vue'

    let sum = ref(0)

    function changeSum() {
        sum.value += 1
    }

    // 类似定时函数，返回了一个可以结束它的值
    const stopWatch = watch(sum, (newVal, oldVal) => {
        console.log('sum变了', newVal, oldVal)
        if (newVal > 10) {
            stopWatch()
        }
    })

    let person = ref({
        name: '张三',
        age: 18
    })
    function changeName() {
        person.value.name += '~'
    }
    function changeAge() {
        person.value.age += 1
    }
    function changePerson() {
        person.value = {name:'李四', age:90}
    }
    // 监视的是对象的地址值，如果想监视对象内部属性变化，需要开启深度监视
    watch(person, (newVal, oldVal) => {
        console.log('person变化了', newVal, oldVal)
    }, {
        deep: true,
        immediate: true
    })

    // reactive默认开启了深度监视
    let stu = reactive({
        name: 'Jack',
        age: 18
    })
    // reactive定义的对象，不可整体修改
    function changeStu() {
        Object.assign(person, {name: 'John', age: 22})
    }
    watch(stu, (newVal, oldVal) => {
        console.log('stu变了', newVal, oldVal)
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