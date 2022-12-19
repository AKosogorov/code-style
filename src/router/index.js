import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/html',
    name: 'HTML',
    component: () => import('@/views/HTMLView.vue')
  },
  {
    path: '/css',
    name: 'CSS',
    component: () => import('@/views/CSSView.vue')
  },
  {
    path: '/js',
    name: 'JS',
    component: () => import('@/views/JSView.vue')
  },
  {
    path: '/dry',
    name: 'DRY',
    component: () => import('@/views/DRYView.vue')
  },
  {
    path: '/about-app',
    name: 'App',
    component: () => import('@/views/AboutAppView.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/VuexView.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/TestView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
