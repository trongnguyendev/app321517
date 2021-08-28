<template>
  <v-app v-bind:class="{ 'dark-mode': isDark }">
    <Header />

    <v-main>
      <Nuxt />
    </v-main>

    <NavigationMain />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  data: () => ({
  }),

  // head() {
  //   return {
  //     bodyAttrs: {
  //       class: this.isDarkMode ? 'dark-mode' : ''
  //     }
  //   }
  // },

  computed: {
    ...mapGetters([
      'isDark',
      'isSidebarOpen'
    ])
  },

  watch: {
  },

  methods: {
	}
}
</script>
