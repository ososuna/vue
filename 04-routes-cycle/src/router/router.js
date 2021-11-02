
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../modules/pokemon/pages/ListPage')
  },
  {
    path: '/about',
    name: 'about',
    /* Lazy load */
    component: () => import('../modules/pokemon/pages/AboutPage')
  },
  {
    path: '/pokemonid/:id',
    name: 'pokemon-id',
    component: () => import('../modules/pokemon/pages/PokemonPage'),
    props: ({ params }) => {
      const id = Number( params.id )
      return isNaN( id ) ? { id: 1 } : { id }
    }
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
