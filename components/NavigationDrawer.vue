<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      value="test"
      temporary
      overlay-color="#00000078"
      width="280"
      @input="onInput"
      class="navigation-menu"
    >
      <v-card
      height="150">
        <v-img :src="imgHeaderNavigation" />
        <v-card-title>AppKit</v-card-title>
        <v-card-text>Welcome to the Future</v-card-text>
        <div class="gradient-card"></div>
      </v-card>

      <v-list
        nav
        dense
      >
        <h2 class="title-group">LIBRARY</h2>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-welcome">
                <font-awesome-icon :icon="['fas', 'heart']"/>
              </span>
              <span class="text-list-item">Welcome</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-homepages">
                <font-awesome-icon :icon="['fas', 'home']"/>
              </span>
              <span class="text-list-item">Homepages</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-components">
                <font-awesome-icon :icon="['fas', 'cog']"/>
              </span>
              <span class="text-list-item">Components</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-pages">
                <font-awesome-icon :icon="['fas', 'file']"/>
              </span>
              <span class="text-list-item">Pages</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-media">
                <font-awesome-icon :icon="['fas', 'camera']"/>
              </span>
              <span class="text-list-item">Media</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-contact">
                <font-awesome-icon :icon="['fas', 'envelope']"/>
              </span>
              <span class="text-list-item">Contact</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>

        <h2 class="title-group">SETTINGS</h2>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-highlights">
                <font-awesome-icon :icon="['fas', 'brush']"/>
              </span>
              <span class="text-list-item">Highlights</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-darkmode">
                <font-awesome-icon :icon="['fas', 'moon']"/>
              </span>
              <span class="text-list-item">Dark Mode</span>
              <span class="ic-right-list-item">
                <v-switch
                v-model="switchDark"
                color="success"
                value="success"
                hide-details
                />
              </span>
            </v-list-item-title>
          </v-list-item>


        </v-list-item-group>

        <h2 class="title-group">CONTACTS</h2>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-highlights">
                <font-awesome-icon :icon="['fas', 'brush']"/>
              </span>
              <span class="text-list-item">Highlights</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-highlights">
                <font-awesome-icon :icon="['fas', 'brush']"/>
              </span>
              <span class="text-list-item">Highlights</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-highlights">
                <font-awesome-icon :icon="['fas', 'brush']"/>
              </span>
              <span class="text-list-item">Highlights</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      isMenuOpenProp: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      drawer: false,
      switchDark: true,
      imgHeaderNavigation: require('@/assets/images/6.jpg')
    }),

    watch: {
      isMenuOpenProp() {
        this.drawer = this.isMenuOpenProp
      }
    },

    methods: {
      onInput(isOpen) {
        if(!isOpen)
        {
          this.$emit('changeDrawer', isOpen)
        }
      }
    }
   
  }
</script>