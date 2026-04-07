<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :dgames="games">
        <h3>默认值，使用者没有传递具体结构时，就会出现</h3>
    </slot>
  </div>
</template>

<script>
export default {
    name: 'Demo',
    props: ['title'],
    data() {
        return {
            games: ['LOL', 'CF', '绝地求生', '黑神话']
        }
    }
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