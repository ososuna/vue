import { createStore } from 'vuex'
import getRandomInt from '@/helpers/getRandomInt';

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none',
        isLoading : false,
        lastRandomInt: 0
    },

    mutations: {
        increment( state ) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, value )  {
            state.count += value
            state.lastMutation = 'incrementBy'
            state.lastRandomInt = value
        }
    },

    // Actions never change state by themselves
    // Actions change state by mutations
    // If actions need to call a mutation its known as commit mutation
    actions: {
        async incrementRandomInt( context ) {

            const randomInt = await getRandomInt()
            
            context.commit( 'incrementBy', randomInt )

        }
    }

})
