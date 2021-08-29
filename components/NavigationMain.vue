<template>
    <v-bottom-navigation
      fixed
      horizontal
      grow
      class="footerbar"
      
    >
    <v-spacer></v-spacer>

    <v-btn href="">
        <span class="icon-footer-bar">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
        </span>
        <span class="label-footer-bar">Features</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn href="">
        <span class="icon-footer-bar">
            <font-awesome-icon :icon="['fas', 'file']"/>
        </span>
        <span class="label-footer-bar">Pages</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn href="" class="btn-home">
        <span class="icon-footer-bar">
            <font-awesome-icon :icon="['fas', 'home']"/>
        </span>
        <span class="label-footer-bar">Welcome</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn href="">
        <span class="icon-footer-bar">
            <font-awesome-icon :icon="['fas', 'camera']"/>
        </span>
        <span class="label-footer-bar">Projects</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn @click="toggleMenuSidebar">
        <span class="icon-footer-bar">
            <font-awesome-icon :icon="['fas', 'bars']"/>
        </span>
        <span class="label-footer-bar">Menu</span>
    </v-btn>

    <v-spacer></v-spacer>
      
      
    </v-bottom-navigation>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data: () => ({
    }),

    methods: {
        ...mapActions([
            'toggleSidebar'
        ]),
        toggleMenuSidebar() {
            this.toggleSidebar(true)
        }
    }
}
</script>