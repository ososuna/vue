import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore =  {

    namespaced: true,
    state,
    mutations,
    // Actions never change state by themselves
    // Actions change state by mutations
    // If actions need to call a mutation its known as commit mutation
    actions,
    getters
}

export default counterStore
