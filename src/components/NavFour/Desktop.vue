<template>
  <v-app-bar flat>
    <span v-for="(item, k) in links" :key="k">
      <nav-links :links="item" />
    </span>
    <v-spacer></v-spacer>
    <v-toolbar-title>{{ logo.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn outlined>Login</v-btn>
    <v-btn text>Register</v-btn>
  </v-app-bar>
</template>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  name: "DesktopNav",
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
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
