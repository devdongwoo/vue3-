<template>
  <div class="board-contanier">
    <AppButton text="작성하기로 이동" :onButton="goWritePage" />
    <div class="items-container">
      <div v-for="item in items" :key="item.id" class="item" @click="detailPage(item.id)">
        <p>제목: {{ item.title }}</p>
        <p>내용: {{ item.content }}</p>
        <p>저자: {{ item.author }}</p>
        <AppButton :id="item.id" :onButton="remove">
          <template #icon>
            <i class="bi bi-trash" />
          </template>
        </AppButton>
        <AppButton :id="item.id" :onButton="patch">
          <template #icon>
            <i class="bi bi-pencil-square" />
          </template>
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import AppButton from '../app/AppButton.vue'
import { deletePost, getPosts } from '@/api/posts'
import { ref } from 'vue'
export default {
  components: {
    AppButton,
  },
  setup() {
    const router = useRouter()

    const items = ref([])
    const posts = async () => {
      const { data } = await getPosts()
      items.value = [...data]
    }
    posts()
    const remove = async (id) => {
      try {
        const cfm = confirm('정말 삭제하시겠습니까?')
        if (cfm) {
          await deletePost(id)
        }
        posts()
      } catch (err) {
        console.error(err)
      }
    }

    const patch = (id) => {
      router.push({
        name: 'Edit',
        params: {
          id,
        },
      })
    }

    const goWritePage = () => {
      router.push({
        name: 'write',
      })
    }

    const detailPage = (id) => {
      router.push({
        name: 'Detail',
        params: {
          id,
        },
      })
    }

    return { goWritePage, detailPage, items, remove, patch }
  },
}
</script>

<style scoped>
.board-contanier {
  height: 93vh;
}

.items-container {
  height: 800px;
  overflow: scroll;
}

.item {
  width: 250px;
  height: 180px;
  border: 1px solid #1c58a1;
}
</style>
