<template>
    <v-navigation-drawer
      v-model="drawerShare"
      absolute
      bottom
      temporary
      mobile-breakpoint="19200"
      height="305"
      class="navigation-share"
      @transitionend="endTransitionDrawerShare"
    >
      <v-card
      class="panel-head-share"
      height="70">
        <v-card-title>Share</v-card-title>
        <v-card-text>Tab a link to</v-card-text>
        <span class="ic-close-share-navigation" @click.stop="drawerShare = !drawerShare">
          <font-awesome-icon color="#dc3545" :icon="['fas', 'times-circle']"/>
        </span>
      </v-card>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="aaa">
            <v-list-item-title>
              <span class="ic-list-item gradient-facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']"/>
              </span>
              <span class="text-list-item">Facebook</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-twitter">
                <font-awesome-icon :icon="['fab', 'twitter']"/>
              </span>
              <span class="text-list-item">Twitter</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-linkedin">
                <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
              </span>
              <span class="text-list-item">LinkedIn</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-whatsapp">
                <font-awesome-icon :icon="['fab', 'whatsapp']"/>
              </span>
              <span class="text-list-item">WhatsApp</span>
              <span class="ic-right-list-item"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <span class="ic-list-item gradient-email">
                <font-awesome-icon :icon="['fas', 'envelope']"/>
              </span>
              <span class="text-list-item">Email</span>
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
      drawerShare: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      switchDark: false,
      imgHeaderNavigation: require('@/assets/images/6.jpg')
    }),

    watch: {
      drawerShare () {
        console.log("change")
      }
    },

    methods: {
      endTransitionDrawerShare () {
        if(!this.drawerShare) {
          this.$emit('changeDrawerShare', this.drawerShare)
        }
      },
      closeNavigationShare() {
        console.log("close")
      }
    }
   
  }
</script>