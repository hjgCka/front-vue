<template>
  <div class="app">
    <h1>{{msg}}，学生姓名是:{{studentName}}</h1>
    <!-- 通过props实现子组件向父组件传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件：子给父传递数据 -->
    <!-- <Student v-on:atguigu="getStudentName" /> -->

    <!-- 通过父组件给子组件绑定自定义事件 -->
    <!-- 不加.native默认绑定的是自定义事件，加了之后才是原生事件。
    正因为如此，所以要求组件的template中只能有一个根元素。
     -->
    <Student ref="student" @click.native="show"/>
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
  },
  data() {
    return {
      msg: '你好啊',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('app收到了学校名称：', name)
    },
    getStudentName(name, ...params) {
      console.log('app收到了学生名称：', name, params)
      this.studentName = name
    },
    show() {
      alert('aaaaaaaaaaa')
    }
  },
  mounted() {
    //使用ref比直接在标签上绑定，更加灵活
    this.$refs.student.$on('atguigu', this.getStudentName)
    //this.$refs.student.$once('atguigu', this.getStudentName)
  }
}
</script>

<style>
  /* 这里的样式都是公共的，而且默认的lang就是css */
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>