<template>
  <h2 class="app-name">Todo Application</h2>
  <router-link to="/">Home</router-link>
  <hr />
  <AddItem @add-todo="addTodo" />
  <hr />
  <TodoList
      v-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"
  />
  <p v-else class="no-items">No items</p>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddItem from '@/components/AddItem'
export default {
  name: 'Todos',
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
  .no-items {
    color: indianred;
    font-weight: 600;
  }
</style>