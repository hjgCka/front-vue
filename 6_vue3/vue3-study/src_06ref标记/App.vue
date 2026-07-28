<template>
    <Person ref="person"/>
    <hr>
    <button @click="test">测试</button>
</template>

<script lang="ts" setup>
import Person from './components/Person.vue';
import {useTemplateRef} from 'vue'

// 局部注册组件。但是setup内，不需要使用export default，这是setup的语法糖
// export default {
//     components: {Person}
// }

    const childRef = useTemplateRef('person')

    function test() {
        console.log(childRef.value)
    }
</script>

<style scoped>

</style>