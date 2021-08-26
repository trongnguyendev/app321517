<template>
  <v-app v-bind:class="{'dark-mode': isDarkMode}">
    <Header @clicked="setDark" />

    <v-main>
      <Nuxt />
    </v-main>

    <NavigationMain />
  </v-app>
</template>

<script>
export default {

  data: () => ({
    isDarkMode: false,
  }),

  head() {
    return {
      bodyAttrs: {
        class: this.isDarkMode ? 'dark-mode' : ''
      }
    }
  },

  methods: {
    setDark(value) {
      this.isDarkMode = value
    }
	}
}
</script>
