
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../modules/pokemon/pages/ListPage')
  },
  {
    path: '/about',
    /* Lazy load */
    component: () => import('../modules/pokemon/pages/AboutPage')
  },
  {
    path: '/id',
    component: () => import('../modules/pokemon/pages/PokemonPage')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../modules/shared/pages/NoPageFound')
  },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router
