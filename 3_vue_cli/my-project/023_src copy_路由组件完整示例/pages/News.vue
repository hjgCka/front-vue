<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
    name: 'News',
    data() {
      return {
        opacity: 1
      }
    },
    activated() {
      console.log('news组件激活')
      this.timer = setInterval(() => {
        console.log('@@@@@@@@@')
        this.opacity -= 0.01
        if (this.opacity <= 0) {
          this.opacity = 1
        }
      }, 16);
    },
    deactivated() {
      console.log('news组件失活')
      clearInterval(this.timer)
    },
    mounted() {
      console.log('news组件被挂载')
    },
    beforeDestroy() {
      console.log('news组件被销毁')
    }
};
</script>

<style>
</style>