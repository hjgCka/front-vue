<template>
  <ul>
    <!-- <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li> -->

    <!-- <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li> -->

    <li>{{id}}</li>
    <li>{{title}}</li>

    <!-- <li>a: {{a}}</li>
    <li>b: {{b}}</li> -->
  </ul>
</template>

<script>
export default {
    namme: 'Detail',
    // props: ['a', 'b'],
    props: ['id', 'title'],
    mounted() {
        console.log('detail', this.$route)
    }
}
</script>

<style>

</style>