<template>
  <Teleport to="#modal">
    <div class="modal-container">
      <div class="modal">
        <p class="close" @click="close">X</p>
        <p>모달창입니다.</p>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:toggle'],
  setup(props, { emit }) {
    const close = () => {
      emit('update:toggle', !props.toggle)
    }
    return { close }
  },
}
</script>

<style scoped>
.modal-container {
  height: 100vh;
  position: absolute;
  background-color: #00000059;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}

.modal {
  text-align: center;
  display: flex;
  padding-top: 10rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.close {
  background-color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
