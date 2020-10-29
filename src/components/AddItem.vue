<template>
  <form @submit.prevent="submit" class="add-item">
    <input type="text" v-model="title" class="add-item-text" />
    <button type="submit" class="add-item-button">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    submit() {
      if (this.title.trim()) {
        const item = {
          id: null,
          title: this.title,
          completed: false
        };

        this.$emit('add-todo', item);
        this.title = '';
      }
    }
  }
}
</script>

<style scoped>
.add-item {
  display: flex;
  width: 100%;
}
.add-item-text {
  display: block;
  width: 100%;
  margin-right: 10px;
}
.add-item-button {
  float: right;
  width: 100px;
}
</style>