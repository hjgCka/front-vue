<template>
  <div>
    <!-- 这里 name sex age的值由外部传入 -->
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="updateAge">点我修改年龄</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '我是一个尚硅谷的学生',
            myAge: this.age + 1
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        }
    },

    //props的值不能改，并且不要与data的属性冲突。
    /**
     * 由于props中的属性值比data相比，优先被接收。
     * 因此如果发生要修改props传来的值的情况，可以再定义一个data中的属性值（比如 myAge）
     * 初始化赋值之后，可以用myAge来修改。
     */

    //简单接收
    //props: ['name', 'sex', 'age']

    //接收的同时，对数据进行类型限制。如果不是对应类型，控制台会报错。
    /* props: {
        name: String,
        age: Number,
        sex: String
    } */

   props: {
    name: {
        type: String,
        required: true //该参数是必传的
    },
    age: {
        type: Number,
        default: 99 //默认值
    },
    sex: {
        type: String,
        required: true
    }
   }
}
</script>

<style>

</style>