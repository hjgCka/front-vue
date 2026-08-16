<template>
    <Person/>
</template>

<script lang="ts" setup>
import Person from './components/Person.vue';

// 局部注册组件。但是setup内，不需要使用export default，这是setup的语法糖
// export default {
//     components: {Person}
// }
</script>

<style scoped>

</style>