import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
const questionStore = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default questionStore
