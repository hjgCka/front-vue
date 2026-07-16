<template>
    <Person/>
    <Car/>
</template>

<script lang="ts">
import Car from './components/Car.vue';
import Person from './components/Person.vue';

// 局部注册组件
export default {
    components: {Person, Car}
}
</script>

<style scoped>

</style>