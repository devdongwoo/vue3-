<template>
  <button @click.stop="onButton">
    {{ $props.text }}
    <slot name="icon"> </slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    id: {
      type: String,
    },
    // props에 함수도 보낼 수 있다!!, Parent Component onToggle 함수를 props에 넣어서
    // Child Component에서 type: Function을 정의하고 사용!
    onButton: {
      type: Function,
      required: true,
    },
  },
  emits: ['update:id'],
  setup(props) {
    const onButton = () => {
      if (props.id) {
        return props.onButton(props.id)
      }
      return props.onButton()
    }
    return {
      onButton,
    }
  },
}
</script>

<style scoped>
.btn-mg {
  margin: 0 4px;
}
</style>
