// 该文件用来创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},

                            // 值为对象，这个对象中所有的key-value都会以props的形式传给detail组件
                            // 需要对应组件定义props，此用法非常少。
                            // props: {a:1, b:2}

                            // 若布尔值为真，就会将该路由组件收到的params参数，以props的形式传递给Detail组件
                            // props: true,

                            // 值为函数，同样将返回的对象，以props的形式传递给Detail组件
                            /* props(route) {
                                return {id: route.query.id, title: route.query.title}
                                // return {id:666, title:'你好'}
                            } */
                            //这里使用箭头函数也可以，解构赋值也可以
                            props: route => {
                                return {id: route.query.id, title: route.query.title}
                            }
                           /* props({query}) {

                           } */
                        }
                    ]
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    // 路由独享的守卫
                    // beforeEnter: (to, from, next) => {
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else {
                    //             next(false)
                    //             alert('学校名不对，无权限查看')
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                }
            ]
        }
    ]
})

//全局前置路由守卫，路由实例创建并挂载到应用时候被调用(/到/，可输出这2个参数)、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    console.log('@@@@@@', to, from)

    // 动态决定是否放行，只对news和message进行控制。也可以用to.name进行判断。
    // to from 都是$route对象。

    // 通过路由元信息判断是否需要进行认证
    if (to.meta.isAuth) {
    // if (to.matched.some(record => record.meta.isAuth)) {
    // 这里由于路由可以嵌套，所以它可以匹配到上级路由。同时考虑到了本级是否认证 和 上级是否要认证
    // if (to.path === '/home/news' || to.path === '/home/message') {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            next(false)
            alert('学校名不对，无权限查看')
        }
    } else {
        next()
    }
}) */

//全局后置路由守卫，初始化时被调用，每次路由切换之后被调用。
// 在组件挂载完毕之前调用这个后置守卫。
/* router.afterEach((to, from) => {
    // 用得较少
    document.title = to.meta.title || '硅谷系统'
}) */

export default router