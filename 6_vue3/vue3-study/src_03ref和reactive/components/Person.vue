<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- 不带语法糖的写法 -->
<!--
<script lang="ts">
    export default {
        name: 'Person',
        /*
        data() {
            return {
                name: '张三',
                age: 18,
                tel: '18822221111'
            }
        },
        methods: {
            showTel() {
                alert(this.tel)
            },
            changeName() {
                this.name = 'zhang-san';
            },
            changeAge() {
                this.age += 1;
            }
        },
        */
        // 执行时机比beforeCreate更早，该方法内this是undefined
        setup() {
            // 此时3个数据不是响应式
            let name = '张三'
            let age = 19
            let tel = '13822221111'

            function changeName() {
                name = 'zhang-san'
            }
            function changeAge() {
                age += 1
            }
            function showTel() {
                alert(tel)
            }

            //vue2的配置选项 data()和 methods可以与 setup同时存在，并且起效
            //vue2中的data或methods可以用到setup内定义的数据和方法，通过this引用
            //但是setup内无法使用vue2配置的数据和方法，因为setup执行时机比beforeCreate还早

            // setup如果返回函数，也就是渲染函数（此时可用箭头函数），那么就会覆盖模板的内容
            // return () => '哈哈'
            return {
                name, age,
                changeName, changeAge, showTel
            }
        }
    }
</script>
-->

<!-- 这个标签可用来配置组件名称，但是可以不写，如果不写的话使用vue文件名作为组件名。 -->
<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<!-- 带语法糖的写法，相当于里面内容都在setup函数内，且返回了对象。
 不带setup的script标签可以与带setup标签共存，前者用于配置组件名称。 -->
<script setup lang="ts">
    import {ref} from 'vue'
    
    let name = ref('张三')
    let age = ref(19)
    let tel = '13822221111'

    function changeName() {
        name.value = 'zhang-san'
    }
    function changeAge() {
        age.value += 1
    }
    function showTel() {
        alert(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0px 5px;
    }
</style>