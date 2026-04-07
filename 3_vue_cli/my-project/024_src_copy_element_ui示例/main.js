import Vue from 'vue'
import App from './App.vue'

import { Button, Select, DatePicker, Row, Option } from 'element-ui'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Row.name, Row)
Vue.component(Option.name, Option)

new Vue({
  el: '#app',
  render: h => {
    console.log('aaaaaaaaaa', App)
    return h(App)
  },
})
