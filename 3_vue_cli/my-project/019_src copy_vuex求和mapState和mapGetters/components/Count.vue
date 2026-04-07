<template>
  <div>
    <h1>当前求和为：{{heji}}</h1>
    <!-- 计算属性不能跨组件 -->
    <h3>当前求和放大10倍为：{{tenSum}}</h3>
    <h3>当前求和放大2倍为：{{doubleSum}}</h3>
    <h3>我在{{xuexiao}}，学习{{xueke}}</h3>
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            num: 1
        }
    },
    mounted() {
        // console.log('count', this)
    },
    methods: {
        increment() {
            // this.$store.dispatch('add', this.num)
            // 可以直接操纵mutations
            this.$store.commit('ADD', this.num)
        },
        decrement() {
            // this.$store.dispatch('dec', this.num)
            this.$store.commit('DEC', this.num)
        },
        incrementOdd() {
            this.$store.dispatch('addOdd', this.num)
        },
        incrementWait() {
            this.$store.dispatch('addWait', this.num)
        }
    },
    computed: {
        // 可由mapGetters所替代
        /* tenSum() {
            return this.$store.getters.tenSum
        }, */
        doubleSum() {
            return this.$store.getters.multiplySum(2)
        },
        // 如果计算属性与state中的属性同名，mapState函数直接传入数组即可
        // mapState(['sum', 'school', 'subject'])
        ...mapState({
            heji: 'sum',
            xuexiao: 'school',
            xueke: 'subject',
        }),
        ...mapGetters({
            tenSum: 'tenSum'
        })
    }
}
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>