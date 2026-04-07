import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  // mounted() {
  //   setTimeout(() => {
  //     j//父组件销毁，子组件的自定义事件失效
  //     this.$destroy()
  //   }, 3000);
  // }
})