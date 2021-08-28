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
      @click="openSidebar"
      class="btn-header"
      >
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </v-btn>
      
    </v-app-bar>

    <NavigationDrawer :isMenuOpenProp="isSidebarOpen" @changeDrawer="actionChange" />

    <NavigationShare :drawerShare="isMenuShareOpen" @changeDrawerShare="actionChangeShare" />
    
  </div>

    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  data: () => ({
    // drawerShare: false,
  }),

  watch: {

  },

  computed: {
    ...mapGetters([
      'isDark',
      'isSidebarOpen',
      'isMenuShareOpen'
    ])
  },

  created() {
  },

  methods: {
    ...mapActions([
      'updateMode',
      'toggleSidebar',
      'toggleMenuShare'
    ]),
    setMode () {
      this.updateMode()
    },
    openSidebar() {
      this.toggleSidebar(true)
    },
    actionChange(value) {
      this.toggleSidebar(value)
    },
    setDrawerShare() {
      this.toggleMenuShare()
    },
    actionChangeShare() {
      this.toggleMenuShare()
      // this.drawerShare = value
    }
  }
}

</script>