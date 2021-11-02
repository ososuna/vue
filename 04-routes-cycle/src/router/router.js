
import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

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

  // DBZ Layout
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [ isAuthenticatedGuard ],
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
  
const canAccess = () => {
  return new Promise( resolve => {

    const random = Math.random() * 100
    if ( random > 50 ) {
      console.log('Authenticated - canAccess')
      resolve(true)
    } else {
      console.log(random, 'blocked by beforeEach guard - canAccess')
      resolve(false)
    }

  })
}

//  Global Guard - Sync
// router.beforeEach( ( to, from, next ) => {
//   console.log({ to, from, next })
  
//   const random = Math.random() * 100
//   if ( random > 50 ) {
//     console.log('Authenticated')
//     next()
//   } else {
//     console.log(random, 'blocked by beforeEach guard')
//     next({ name: 'pokemon-home' })
//   }

// })

// Global Guard - Async
// router.beforeEach( async(to, from, next) => {

//   const authorized = await canAccess()
  
//   authorized
//     ? next()
//     : next({ name: 'pokemon-home' })

// })

//

export default router
