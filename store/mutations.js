import * as types from './mutation-types'

export default {

    [types.TOGGLE_MODE](state) {
        state.isDark = !state.isDark
    },

    [types.TOGGLE_MENU_SIDEBAR](state) {
        state.isMenuOpen = !state.isMenuOpen
    }
}