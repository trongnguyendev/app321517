<template>
  <div v-bind:class="{'dark-mode': isDarkMode}">
    <Header @clicked="setDark" />

    <main>
      <SlideTop />
      <FeatureProduct />
      <PopularCategories />
      <NewStore />
    </main>

    <NavigationMain />
  </div>
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

  watch: {
  },

  methods: {
    setDark(value) {
      this.isDarkMode = value
    }
	}
}
</script>
