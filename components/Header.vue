<template>
  <div>
    <v-app-bar
      color="accent-4"
      dark
      fixed
    >
      <v-btn class="btn-back-left btn-header">
        <font-awesome-icon class="ic-light" :icon="['fas', 'chevron-left']"/>
      </v-btn>

      <v-spacer class="spacer-header"></v-spacer>

      <h1 class="logo">Store</h1>

      <v-spacer></v-spacer>

      <v-btn class="btn-header btn-share" @click="setDrawerShare">
        <font-awesome-icon :icon="['fas', 'share-alt']"/>
      </v-btn>

      <v-btn 
      class="btn-header btn-mode" 
      @click="setMode"
      v-if="!isDark"
      >
        <font-awesome-icon class="ic-light" :icon="['fas', 'lightbulb']"/>
        <font-awesome-icon class="ic-sun" :icon="['fas', 'sun']"/>
      </v-btn>

      <v-btn 
      class="btn-header btn-mode" 
      @click="setMode"
      v-if="isDark"
      >
        <font-awesome-icon :icon="['fas', 'moon']"/>
      </v-btn>

      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-btn 
      @click="setDrawer"
      class="btn-header"
      >
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </v-btn>
      
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" @changeDrawer="actionChange" />

    <NavigationShare :drawerShare="drawerShare" @changeDrawerShare="actionChangeShare" />
    
  </div>

    
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {

  data: () => ({
    drawer: false,
    drawerShare: false,
    group: null,
  }),

  watch: {

  },

  computed: {
    ...mapGetters([
      'isDark',
      'isMenuOpen'
    ])
  },

  created() {
  },

  methods: {
    ...mapActions([
      'updateMode',
      'toggleMenu'
    ]),

    setMode () {
      this.updateMode()
    },
    setDrawer() {
      this.drawer = !this.drawer
    },
    actionChange(value) {
      this.drawer = value
    },
    setDrawerShare() {
      this.drawerShare = !this.drawerShare
    },
    actionChangeShare(value) {
      this.drawerShare = value
    }
  }
}

</script>