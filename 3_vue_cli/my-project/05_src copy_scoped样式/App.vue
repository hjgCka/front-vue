<template>
  <div>
    <School />
    <hr/>
    <Student />
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
/* 这里的样式都是公共的，而且默认的lang就是css */
    .title {
      color: red;
    }
</style>