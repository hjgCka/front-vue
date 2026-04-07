<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我显式学校名称</button>
    </div>
</template>

<script>
    /* 组件交互相关的代码（数据、方法等等） */
    //Vue.extend可以省略，name与文件名称保持一致
    export default {
        name: 'School',
        data() {
            return {
                schoolName: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>