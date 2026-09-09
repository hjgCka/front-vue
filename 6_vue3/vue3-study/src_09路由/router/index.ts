// 创建一个路由器，并暴露出去

// 引入createRouter
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
// 引入要用到的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

import News2 from '@/pages/News2.vue'
import Detail2 from '@/pages/Detail2.vue'

import News3 from '@/pages/News3.vue'
import Detail3 from '@/pages/Detail3.vue'

// 创建路由器
const router = createRouter({
    // createWebHistory 路径不带#，更加美观。需要Nginx配置 try_files 指令
    // createWebHashHistory 使用#，不用后端配合处理路径
    history: createWebHistory(),
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    // 子级路由不用写斜杠
                    path: 'detail',
                    component: Detail
                }
            ]
        },
        {
            name: 'xinwen2',
            path: '/news2',
            component: News2,
            children: [
                {
                    name: 'xiangqing2',
                    // 子级路由不用写斜杠
                    path: 'detail/:id/:title/:content?',
                    component: Detail2
                }
            ]
        },
        {
            name: 'xinwen3',
            path: '/news3',
            component: News3,
            children: [
                {
                    name: 'xiangqing3',
                    // 子级路由不用写斜杠
                    path: 'detail/:id/:title/:content?',
                    component: Detail3,
                    
                    // 1. 将路由收到的params参数作为props传递给路由组件
                    // props: true
                    // 2. 可以自己决定将什么作为参数传给路由组件
                    props(route) {
                        // 如果是query传参，就使用query。一般来说params传参，使用第一种即可。
                        return route.params
                    }
                    // 3. 对象写法，自己决定将什么作为props传递给路由组件，但是数据是固定的
                    // props: {
                    //     id:100,
                    //     title:200,
                    //     content:300
                    // }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        // 默认重定向，避免一进入显示空白
        {
            path:'/',
            redirect: '/home'
        }
    ]
})

// 暴露出去router
export default router