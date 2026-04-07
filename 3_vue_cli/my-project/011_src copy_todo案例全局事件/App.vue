<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <MyHeader :addItem="add"/> -->
        <MyHeader @addItem="add" />

        <!-- <MyList :todos="todos" :checkToDo="checkToDo" :deleteTodo="deleteTodo"/> -->
        <MyList :todos="todos" />

        <!-- <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/> -->
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>

      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
        // todos: [
        //     {id:'001', title:'吃饭', done: true},
        //     {id:'002', title:'睡觉', done: true},
        //     {id:'003', title:'打游戏', done: true}
        // ]
        todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
      //新增一个todo
      add(todoObj) {
        this.todos.unshift(todoObj)
      },
      //点击完成/取消一个todo
      checkToDo (id) {
        this.todos.forEach(todo => {
          if (todo.id === id) {
            todo.done = !todo.done
            return
          }
        })
      },
      //删除一个todo
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => {
          return todo.id !== id
        })
      },
      //全选或取消全选
      checkAllTodo(done) {
        this.todos.forEach(todo => todo.done = done)
      },
      //清除所有完成的todo
      clearAllTodo() {
        this.todos = this.todos.filter(todo => !todo.done)
      }
  },
  mounted() {
    //响应点击item中的checkbox事件
    this.$bus.$on('checkItem', this.checkToDo)
    //响应删除item的事件
    this.$bus.$on('deleteItem', this.deleteTodo)
  },
  beforeDestroy() {
    //app销毁前进行解绑
    this.$bus.$off(['checkItem', 'deleteItem'])
  },
  watch: {
    //对todos的深度监视
    todos: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('todos', JSON.stringify(newVal))
      }
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>