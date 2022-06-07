import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PageCatalog from '../pages/PageCatalog.vue'
import PageInfoShop from '../pages/PageInfoShop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: PageCatalog
    },
    {
      path: '/info-shop',
      name: 'info-shop',
      component:  PageInfoShop
    }
  ]
})

export default router
