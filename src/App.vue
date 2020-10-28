<template>
  <h1>Todo Application</h1>
  <hr />
  <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
</template>

<script>
import TodoList from '@/components/TodoList'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, title: 'Buy butter', completed: false },
        { id: 2, title: 'Buy bread', completed: false },
        { id: 3, title: 'Buy water', completed: false }
      ]
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
