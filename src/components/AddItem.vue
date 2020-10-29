<template>
  <form class="add-item">
    <input type="text" class="add-item-text" />
    <button type="submit" class="add-item-button">Add</button>
  </form>
</template>

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