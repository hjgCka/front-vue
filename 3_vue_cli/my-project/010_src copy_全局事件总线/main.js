import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.extend返回的是一个VueComponent构造函数
// 原型上的x是一个VueComponent实例对象。
// 这样组件a在x上注册自定义事件，组件b可以触发x的自定义事件，这样就完成了组件b向组件a传递数据
// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})