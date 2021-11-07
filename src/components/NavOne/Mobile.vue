<template>
  <v-card flat>
    <v-app-bar class="pr-15 pl-15">
      <v-toolbar-title>{{ logo.name }}</v-toolbar-title>
      <v-spacer />
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

          <v-divider />

          <v-list-item v-for="(social, i) in socials" :key="`${i}social`">
            <v-list-item-title>
              <v-btn icon @click="goto(social.uri)">
                <v-icon>{{ `mdi-${social.icon}` }}</v-icon>
              </v-btn>
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
    socials: {
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
