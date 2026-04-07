<template>
  <div>
    <ul>
        <li v-for="item in messageList" :key="item.id">
            <!-- 双引号内要写js表达式，这里写了一个模板字符串，这是合法的 -->
            <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

            <!-- 携带query参数 -->
            <router-link :to="{
                name: 'xiangqing',
                //path: '/home/message/detail',
                query: {
                    id: item.id,
                    title: item.title
                }
            }">
                {{item.title}}
            </router-link>

            <!-- 携带param参数，动态路由匹配 -->
            <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link> -->
            <!-- <router-link :to="{
                //使用params时，必须使用name
                name: 'xiangqing',
                //path: '/home/message/detail',
                params: {
                    id: item.id,
                    title: item.title
                }
            }">
                {{item.title}}
            </router-link> -->

            <button @click="pushShow(item)">push查看</button>
            <button @click="replaceShow(item)">replace查看</button>
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
    },
    methods: {
        pushShow(item) {
            this.$router.push(
                {
                    name: 'xiangqing',
                    query: {
                        id: item.id,
                        title: item.title
                    }
                }
            )
        },
        replaceShow(item) {
            this.$router.replace(
                {
                    name: 'xiangqing',
                    query: {
                        id: item.id,
                        title: item.title
                    }
                }
            )
        }
    }
};
</script>

<style>
</style>