<template>
  <div class="write-container">
    저자: <AppInput v-model:modelValue="params.author" />
    <hr />
    제목: <AppInput v-model:modelValue="params.title" />
    <hr />
    내용: <AppTextArea v-model:modelValue="params.content" />
    <AppButton text="게시글 생성" :onButton="create" class="btn-mg" />
    <AppButton text="뒤로가기" :onButton="back" />
  </div>
</template>

<script>
import AppInput from '@/components/app/AppInput.vue'
import AppTextArea from '../app/AppTextArea.vue'
import AppButton from '../app/AppButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createPost } from '@/api/posts'
import { toRefs } from 'vue'
export default {
  components: {
    AppInput,
    AppButton,
    AppTextArea,
  },
  setup() {
    const params = ref({
      title: '',
      content: '',
      author: '',
    })

    const create = async () => {
      try {
        if (params.value.title && params.value.content && params.value.author) {
          const data = {
            title: params.value.title,
            content: params.value.content,
            author: params.value.author,
          }
          await createPost(data)
          router.push({
            name: 'Board',
          })
        }
      } catch (err) {
        console.error(err)
      }
    }

    const router = useRouter()
    const back = () => {
      router.push({
        name: 'Board',
      })
    }

    return { params, create, back }
  },
}
</script>

<style scoped>
.write-container {
  height: 93vh;
}
</style>
