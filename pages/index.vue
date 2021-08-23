<template>
  <div v-bind:class="{'dark-mode': isDarkMode}">

    <Header @clicked="setDark" />

    <SlideTop />

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
    // isDrawer: ()=> {
    //   // console.log("changed");
    // }
  },

  methods: {
    setDark(value) {
      this.isDarkMode = value
    }
	}
}
</script>
