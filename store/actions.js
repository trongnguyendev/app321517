import * as types from './mutation-types'

export default {

    updateMode({ commit }) {
        commit(types.TOGGLE_MODE)
    },

    toggleMenu({ commit }) {
        commit(types.TOGGLE_MENU_SIDEBAR)
    }
}