<template>
  <textarea placeholder="내용을 입력해주세요" class="textarea" v-model="value"> </textarea>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue
      },
      set(newValue) {
        emit('update:modelValue', newValue)
      },
    })
    return { value }
  },
}
</script>

<style scoped>
.textarea {
  border: none;
  resize: none;
  width: 240px;
  height: 200px;
}
</style>
