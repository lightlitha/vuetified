<template>
  <div>
    <v-app-bar flat class="pr-15 pl-15">
      <v-toolbar-title>{{ logo.name }}</v-toolbar-title>
      <v-spacer />
      <span v-for="(item, k) in links" :key="k">
        <nav-links :links="item" />
      </span>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, i) in navbtn"
        :key="`${i}btn`"
        tile
        outlined
        small
        class="ma-2"
        @click="goto(item.uri)"
      >
        <v-icon left>{{ `mdi-${item.icon}` }}</v-icon>
        {{ item.label }}
      </v-btn>
    </v-app-bar>
  </div>
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
  methods: {
    goto(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>
