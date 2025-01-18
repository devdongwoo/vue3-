<template>
  <div class="edit-container">
    저자: <AppInput v-model:modelValue="item.author" />
    <hr />
    제목: <AppInput v-model:modelValue="item.title" />
    <hr />
    내용: <AppTextArea v-model:modelValue="item.content" />
    <AppButton text="게시글 수정" :onButton="edit" class="btn-mg" />
    <AppButton text="뒤로가기" :onButton="back" />
  </div>
</template>

<script>
import { getPost, patchPost } from '@/api/posts'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppInput from '../app/AppInput.vue'
import AppTextArea from '../app/AppTextArea.vue'
import AppButton from '../app/AppButton.vue'

export default {
  components: {
    AppInput,
    AppTextArea,
    AppButton,
  },
  setup() {
    const router = useRouter()
    const { params } = useRoute()
    const { id } = params
    const item = ref({
      id: '',
      title: '',
      content: '',
      author: '',
    })

    const post = async () => {
      try {
        const { data } = await getPost(id)
        item.value.id = data.id
        item.value.title = data.title
        item.value.content = data.content
        item.value.author = data.author
      } catch (err) {
        console.error(err)
      }
    }
    post()

    const edit = async () => {
      try {
        const params = {
          id: item.value.id,
          title: item.value.title,
          content: item.value.content,
          author: item.value.author,
        }
        await patchPost(id, params)
        router.push({
          name: 'Board',
        })
      } catch (err) {
        console.error(err)
      }
    }

    const back = () => {
      router.push({
        name: 'Board',
      })
    }

    return { item, back, edit }
  },
}
</script>

<style scoped>
.edit-container {
  height: 93vh;
}
</style>
