import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/views/HomeView.vue'
import BoardListView from '@/components/views/BoardListView.vue'
import BoardWriteView from '@/components/views/BoardWriteView.vue'
import BoardDetailView from '@/components/views/BoardDetailView.vue'
import BoardEditView from '@/components/views/BoardEditView.vue'
import NotFound from '@/components/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/board',
    name: 'Board',
    component: BoardListView,
  },
  {
    path: '/write',
    name: 'write',
    component: BoardWriteView,
  },
  {
    name: 'Edit',
    path: '/posts/:id',
    component: BoardEditView,
  },
  {
    name: 'Detail',
    path: '/posts/detail/:id',
    component: BoardDetailView,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
