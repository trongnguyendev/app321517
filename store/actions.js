import * as types from './mutation-types'

export default {

    updateMode({ commit }) {
        commit(types.TOGGLE_MODE)
    },

    toggleSidebar({ commit }, data=false) {
        commit(types.TOGGLE_MENU_SIDEBAR, data)
    },

    toggleMenuShare({ commit }) {
        commit(types.TOGGLE_MENU_SHARE)
    }
}