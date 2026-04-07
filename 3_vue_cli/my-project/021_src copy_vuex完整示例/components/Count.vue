<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <!-- 计算属性不能跨组件 -->
    <h3>当前求和放大10倍为：{{tenSum}}</h3>
    <h3>当前求和放大2倍为：{{multiplySum(2)}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color:red;">Person组件的总人数是：{{personLength}}</h3>
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            num: 1
        }
    },
    mounted() {
        // console.log('count_mounted', this.$store)
    },
    methods: {
        ...mapMutations('count', {
            increment: 'ADD',
            decrement: 'DEC'
        }),
        ...mapActions('count', {
            incrementOdd: 'addOdd',
            incrementWait: 'addWait'
        })
    },
    computed: {
        ...mapState('count', ['school', 'subject', 'sum']),

        ...mapGetters('count', ['tenSum', 'multiplySum']),
        ...mapGetters('person', ['personLength'])
    }
}
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>