<template>
  <div class="container">
    <slot name="header"></slot>
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
.container {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: pink;
}
</style>
