import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/Views/InicioView.vue'
import FavoritosView from '../Views/FavoritosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../Views/FavoritosView.vue')
    },
  ]
})

export default router
