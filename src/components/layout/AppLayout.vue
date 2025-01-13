<template>
  <div class="container">
    <AppHeader>
      <template #header>
        <span v-for="(item, idx) in header" :key="idx" :style="{ marginRight: '10px' }">
          <RouterLink :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`">
            {{ item }}
          </RouterLink>
        </span>
      </template>
    </AppHeader>
    <AppMain class="main">
      <template #default>
        <RouterView></RouterView>
      </template>
    </AppMain>
    <AppFooter />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  setup() {
    const header = ['Home', 'Board']
    const headerStyle = 'headerStyle'
    return { header, headerStyle }
  },
}
</script>

<style scoped></style>
