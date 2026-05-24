import { createRouter, createWebHistory } from 'vue-router'
import TeamView from '../teamView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/team'
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    }
  ]
})

export default router