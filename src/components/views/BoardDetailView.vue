<template>
  <div class="detail-container">
    <div>
      <p>저자: {{ item.author }}</p>
      <p>제목: {{ item.title }}</p>
      <p>내용: {{ item.content }}</p>
    </div>
  </div>
</template>

<script>
import { getPost } from '@/api/posts'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const { params } = useRoute()
    const { id } = params
    const item = ref({
      title: '',
      content: '',
      author: '',
    })

    const post = async () => {
      const { data } = await getPost(id)
      item.value.title = data.title
      item.value.author = data.author
      item.value.content = data.content
    }
    post()
    return { item }
  },
}
</script>

<style scoped>
.detail-container {
  height: 93vh;
}
</style>
