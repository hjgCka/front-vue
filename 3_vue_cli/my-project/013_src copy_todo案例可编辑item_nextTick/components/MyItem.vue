<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <!-- 这里变化的比较频繁，不用v-if，而是用v-show -->
      <span v-show="!item.isEdit">{{item.title}}</span>
      <input v-show="item.isEdit" type="text"
       :value="item.title" 
       @blur="handleBlur(item, $event)"
       ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="deleteItem(item.id)">删除</button>
    <button v-show="!item.isEdit" class="btn btn-edit" @click="handlerEdit(item)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ['item'],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkItem', id)
    },
    deleteItem(id) {
      if(confirm('确定删除吗?')) {
        this.$bus.$emit('deleteItem', id)
      }
    },
    //编辑todo
    handlerEdit(todo) {
      //这样改了之后，没有进行监听这个属性
      //todo.isEdit = true

      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        //这样添加才是响应式的
        this.$set(todo, 'isEdit', true)
      }

      //$nextTick，DOM更新之后自动执行，并且回调函数内的this绑定到当前实例
      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
    },
    //处理失去焦点的事件
    handleBlur(todo, event) {
      todo.isEdit = false
      if (!event.target.value.trim()) {
        alert('输入不能为空')
        return
      }
      this.$bus.$emit('updateTodo', todo.id, event.target.value)
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>