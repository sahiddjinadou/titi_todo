import TodoView from '@/views/Todoview.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TodoView
    }
  ]
})

export default router
