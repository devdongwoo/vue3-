<template>
  <div class="home-container">
    <AppButton text="모달창 토글 버튼" :onButton="onButton" />
    <AppModal v-if="toggle" :toggle="toggle" @update:toggle="onButton" />
  </div>
</template>

<script>
import { ref } from 'vue'
import AppButton from '../app/AppButton.vue'
import AppModal from '../app/AppModal.vue'
export default {
  components: {
    AppButton,
    AppModal,
  },
  setup() {
    const toggle = ref(false)
    const onButton = () => {
      toggle.value = !toggle.value
    }
    return { toggle, onButton }
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
