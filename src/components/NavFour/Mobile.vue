<template>
  <v-card flat>
    <v-app-bar>
      <v-row>
        <v-col cols="12">
          <v-toolbar-title>{{ logo.name }}</v-toolbar-title>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click="drawer = true" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in navbtn" :key="`${i}btn`">
            <v-list-item-title>
              <v-btn tile outlined small class="ma-2" @click="goto(item.uri)">
                {{ item.label }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="(link, k) in links" :key="k">
            <v-list-item-title>
              <nav-links :links="link" />
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
