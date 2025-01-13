<template>
  <div class="container">
    <slot name="default"></slot>
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
  background-color: coral;
  height: 80%;
}
</style>
