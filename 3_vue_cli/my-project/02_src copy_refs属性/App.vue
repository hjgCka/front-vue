<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎学习vue!'
    }
  },
  components: {
    School
  },
  methods: {
    showDom() {
      //console.log(this.$refs.title)

      //输出组件实例对象，是School组件的实例对象
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>

</style>