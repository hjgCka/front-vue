import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
  // render(createElement) {
  //   //会生成h1标签，替换el指向的元素
  //   return createElement('h1', '你好啊')
  // }
  //render: createElement => createElement('h1', '你好啊')
}).$mount('#app')
