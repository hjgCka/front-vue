<template>
  <div>
    <School />
    <hr/>
    <Student />
    <hr/>
    <!-- 没有绑定到data中的属性而是一个固定的值，因此数据变化之后，重新渲染这里的值不会更新-->
    <input type="text" v-focus:xx="22" />
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>

<style>

</style>