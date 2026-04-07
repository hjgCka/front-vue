<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    mounted() {
      console.log('about组件挂载完毕', this)
    },
    beforeDestroy() {
      console.log('about组件即将被销毁')
    },
    beforeRouteEnter(to, from, next) {
      // 通过路由规则，进入该组件时被调用。意思是说，如果直接使用<About/>，这样进入组件，是无法触发这个守卫的。
      // 鉴权也可以放在这儿
      next()
    },
    beforeRouteLeave(to, from, next) {
      // 通过路由规则，离开该组件时被调用
      next()
    },
    beforeRouteUpdate(to, from, next) {
      // 从/foo/1到/foo/2时，调用该守卫
    }
}
</script>

<style>

</style>