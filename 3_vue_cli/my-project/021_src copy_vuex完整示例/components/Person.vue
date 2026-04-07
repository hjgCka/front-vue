<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red;">Count组件求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWangPerson">添加姓王的成员</button>
    <button @click="addRandomPerson">添加随机用户</button>
    <ul>
        <li v-for="item in personList" :key="item.id">
            {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.person.personList
        },
        sum() {
            return this.$store.state.count.sum
        }
    },
    methods: {
        add() {
            if (!this.name.trim()) {
                alert('请输入内容')
                return
            }
            const personObj = {id:nanoid(), name: this.name}
            this.$store.commit('person/ADD_PERSON', personObj)
            this.name = ''
        },
        addWangPerson() {
            if (!this.name.trim()) {
                alert('请输入内容')
                return
            }
            const personObj = {id:nanoid(), name: this.name}
            this.$store.dispatch('person/addWangPerson', personObj)
            this.name = ''
        },
        addRandomPerson() {
            this.$store.dispatch('person/addRandomPerson')
        }
    }
}
</script>

<style>

</style>