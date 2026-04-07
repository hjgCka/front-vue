import Vue from 'vue'
import App from './App.vue'

//引入插件
import plugins from './plugins'

Vue.config.productionTip = false

//可以带参数比如，x,y,z。也可以传入一个对象用options来接收。
Vue.use(plugins)

new Vue({
  el: '#app',
  render: h => h(App)
})