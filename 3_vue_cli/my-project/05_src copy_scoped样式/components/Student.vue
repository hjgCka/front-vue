<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    }
}
</script>

<style scoped>
/* 后引入的样式会覆盖签名的，这里可能产生类名冲突。 */
 .demo{
    background-color: orange;
 }
</style>