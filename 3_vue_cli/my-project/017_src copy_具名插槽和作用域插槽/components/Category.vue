<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- <ul>
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->
    <slot name="center"><h3>默认值，使用者没有传递具体结构时，就会出现</h3></slot>
    <slot name="footer"><h3>默认值，使用者没有传递具体结构时，就会出现</h3></slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>