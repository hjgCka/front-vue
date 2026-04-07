<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="destroyComponent">销毁当前Student组件的实例对象</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男',
            number: 10
        }
    },
    methods: {
      add() {
        console.log('add回调函数被调用')
        this.number++
      },
      sendStudentName() {
        //触发student组件实例的atguigu事件
        this.$emit('atguigu', this.name, 99, 77)
      },
      unbind() {
        this.$off('atguigu')//解绑一个自定义事件
        //this.$off(['atguigu', 'demo'])//解绑多个自定义事件
        //this.$off() //解绑全部事件
      },
      destroyComponent() {
        //销毁了当前Student组件实例，所有的自定义事件也解绑了
        //当前版本的vue，会导致原生事件也被解绑
        this.$destroy()
      }
    }
}
</script>

<style scoped>
/* 后引入的样式会覆盖签名的，这里可能产生类名冲突。 */
 .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
 }
</style>