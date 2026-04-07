<template>
  <div class="school">
    <h2 class="title">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'Student',
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    mounted() {
      // this.$bus.$on('hello', (data) => {
      //   console.log('school组件受到了数据', data)
      // })

      //消息订阅
      this.pubId = pubsub.subscribe('hello', (msgName, studentName) => {
        // console.log('有人发布了hello消息，执行了回调')
        console.log('受到学生姓名：', studentName)
      })
    },
    beforeDestroy() {
      //组件School销毁之前解除绑定的事件
      // this.$bus.off('hello')

      //取消订阅
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
 .school {
    background-color: skyblue;
    padding: 5px;
 }
</style>