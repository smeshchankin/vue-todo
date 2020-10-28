<template>
  <ul class="list">
    <TodoItem v-for="todo in todos" v-bind:todo="todo" v-on:remove-todo="removeItem" />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  components: { TodoItem },
  props: ['todos'],
  methods: {
    removeItem(id) {
      this.$emit('remove-todo', id);
    }
  }
}
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>