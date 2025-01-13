<template>
  <div class="home-container">
    <button class="modal-btn">modal toggle</button>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.home-container {
  height: 93vh;
}
.modal-btn {
  width: 100px;
  border-radius: 5px;
  border-style: none;
  background-color: aqua;
  cursor: pointer;
}
</style>
