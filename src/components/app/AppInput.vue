<template>
  <input type="text" v-model="modelValue" />
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    modelValue: [String, Number],
  },
  emits: {
    'update:modelValue': (modelValue) => {
      if (!modelValue) {
        return false
      }
      return true
    },
  },
  setup(props, { emit }) {
    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(newValue) {
        emit('update:modelValue', newValue)
      },
    })
    return { modelValue }
  },
}
</script>

<style scoped></style>
