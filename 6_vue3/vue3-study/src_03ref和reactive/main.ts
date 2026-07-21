// 这个导入是es模块所支持的语法，如果是js会执行一遍里面的语句。
// 但是在普通js文件中这样用，会报错，因为浏览器无法执行css文件内的样式代码。
// 开发模式：vite自动创建 <style> 标签插入页面，让样式生效。
// 打包模式：vite收集所有 CSS，最终合并提取成独立 .css 文件，通过 link 引入。
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
