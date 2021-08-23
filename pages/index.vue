<template>
  <div v-bind:class="{'dark-mode': isDarkMode}">
    <Header @clicked="setDark" />
    <div style="height: 1200px;"></div>
    <NavigationMain />
  </div>
</template>

<script>
export default {

  data: () => ({
    isDarkMode: false,
  }),

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
