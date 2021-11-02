
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('@/modules/pokemon/layouts/PokemonLayout'),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import('../modules/pokemon/pages/ListPage')
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import('../modules/pokemon/pages/AboutPage')
      },
      {
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        component: () => import('../modules/pokemon/pages/PokemonPage'),
        props: ({ params }) => {
          const id = Number( params.id )
          return isNaN( id ) ? { id: 1 } : { id }
        }
      },
      {
        path: '',
        redirect: { name: 'pokemon-about' }
      }
    ]
  },

  {
    path: '/dbz',
    name: 'dbz',
    component: () => import('@/modules/dbz/layouts/DragonBallLayout'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import('@/modules/dbz/pages/Characters')
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('@/modules/dbz/pages/About')
      },
       {
        path: '',
        redirect: { name: 'dbz-characters' }
      }
    ]
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
