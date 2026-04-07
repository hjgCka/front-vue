export default {
    install(Vue, options) {
        //定义全局过滤器

        //定义自定义指令，本质是Vue有一个属性directive，它指向的是一个函数
        Vue.directive('focus', {
            bind(el, binding) {
                console.log(binding)
                el.value = binding.value
            },
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            },
            //指令的模板在重新解析时被调用
            update(el, binding) {
                el.value = binding.value
            }
        })

        //定义全局混入

        //在Vue原型上添加方法或属性
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}