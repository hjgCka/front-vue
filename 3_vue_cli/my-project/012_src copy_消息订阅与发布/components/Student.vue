<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendName">发送姓名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    methods: {
      sendName() {
        // this.$bus.$emit('hello', this.name)

        //发布消息
        pubsub.publish('hello', this.name)
      }
    }
}
</script>

<style scoped>
/* 后引入的样式会覆盖签名的，这里可能产生类名冲突。 */
 .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
 }
</style>