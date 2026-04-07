<template>
  <div>
    <!-- 
    这里加上冒号，相当于v-bind，双引号的内容作为表达式的值赋值给了age，
    这样age就是数字而不是字符串。
    这里可以用v-bind，相当于动态传值了。不用v-bind的话，属性值就固定了。
    -->
    <Student name="李四" sex="女" :age="22"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

<style>

</style>