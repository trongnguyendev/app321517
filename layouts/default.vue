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
