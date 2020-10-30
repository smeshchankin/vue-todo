<template>
  <h1 class="app-name">Todo Application</h1>
  <AddItem @add-todo="addTodo" />
  <hr />
  <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
</template>

<script>
import TodoList from '@/components/TodoList'
import AddItem from '@/components/AddItem'
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json;
      });
  },
  methods: {
    addTodo(item) {
      const id = Math.max(0, ...this.todos.map(i => i.id)) + 1;
      this.todos.push({ ...item, id: id });
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  components: {
    TodoList,
    AddItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.app-name {
  text-align: center;
}
</style>
