<template>
  <div>
    <ul>
        <li v-for="item in messageList" :key="item.id">
            <!-- 双引号内要写js表达式，这里写了一个模板字符串，这是合法的 -->
            <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

            <router-link :to="{
                path: '/home/message/detail',
                query: {
                    id: item.id,
                    title: item.title
                }
            }">
                {{item.title}}
            </router-link>

            <!-- 2中都是配置查询参数，并且浏览器地址会带上这些参数 -->
        </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                {id:'001', title: '消息001'},
                {id:'002', title: '消息002'},
                {id:'003', title: '消息003'},
                {id:'004', title: '消息004'}
            ]
        }
    }
};
</script>

<style>
</style>