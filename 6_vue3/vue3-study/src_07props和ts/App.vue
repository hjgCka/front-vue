<template>
    <!-- <Person a="哈哈" :list="personList"/> -->
    <Person/>
</template>

<script lang="ts" setup>
import Person from './components/Person.vue';
import {reactive} from 'vue'
import {type Persons} from '@/types'

// 局部注册组件。但是setup内，不需要使用export default，这是setup的语法糖
// export default {
//     components: {Person}
// }

let personList = reactive<Persons>([
    {id:'1123', name:'张三', age: 20},
    {id:'1124', name:'李四', age: 20},
    {id:'1125', name:'王五', age: 20}
])
</script>

<style scoped>

</style>