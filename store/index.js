import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
    isDark: false,
    isMenuOpen: false,
}

const createStore = () => {
    return new Vuex.Store({
        strict: true,
        state,

        getters,

        mutations,

        actions,

        modules: {
    
        }
    })
}
 
export default createStore