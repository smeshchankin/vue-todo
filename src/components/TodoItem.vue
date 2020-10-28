<template>
  <li class="item">
    <span v-bind:class="{done: todo.completed}">
      <input :id="'item_' + todo.id" type="checkbox" class="action-check"
             v-on:change="todo.completed = !todo.completed" />
      <label :for="'item_' + todo.id">
        <strong>{{ todo.id }}</strong>
        {{ todo.title }}
      </label>
    </span>
    <button class="action-delete" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .item {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
  }

  .action-check {
    margin-right: 1rem;
  }
  .action-delete {
    width: 2rem;
    height: 2rem;
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }
  .done {
    text-decoration: line-through;
  }
</style>