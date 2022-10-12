import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  const token = localCache.getCacheItem('token')

  if (to.name !== 'login' && !token) {
    return '/login'
  }
  if (to.name === 'login' && token) {
    return '/main'
  }
})

export default router
