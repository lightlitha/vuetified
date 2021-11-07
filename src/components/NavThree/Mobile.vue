<template>
  <v-card flat>
    <v-app-bar>
      <v-toolbar-title>{{ logo.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="(item, i) in navbtn"
        :key="`${i}btn`"
        icon
        tile
        small
        class="ma-2"
        @click="goto(item.uri)"
      >
        <v-icon left>{{ `mdi-${item.icon}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click="drawer = true" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, k) in links" :key="k">
            <v-list-item-title>
              <nav-links :links="item" />
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  name: "HomeAppBar",
  components: { NavLinks },
  props: {
    logo: {
      type: Object,
      default() {
        return {};
      },
    },
    links: {
      type: Array,
      default() {
        return [];
      },
    },
    navbtn: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    goto(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>
