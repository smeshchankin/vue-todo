<template>
  <li>
    <span>
      <input :id="'item_' + todo.id" type="checkbox" />
      <label :for="'item_' + todo.id">
        <strong>{{ todo.id }}</strong>
        {{ todo.title }}
      </label>
    </span>
    <button>&times;</button>
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