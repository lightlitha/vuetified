<template>
  <div>
    <v-system-bar window>
      <v-btn text small>
        {{ contacts.email }}
      </v-btn>
      <v-btn text small>
        {{ contacts.telephone }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(social, i) in socials"
        :key="`${i}social`"
        small
        icon
        @click="goto(social.uri)"
      >
        <v-icon>{{ `mdi-${social.icon}` }}</v-icon>
      </v-btn>
    </v-system-bar>
    <v-app-bar class="pr-15 pl-15">
      <v-toolbar-title>{{ logo.name }}</v-toolbar-title>
      <v-spacer />
      <span v-for="(item, k) in links" :key="k">
        <nav-links :links="item" />
      </span>
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
    socials: {
      type: Array,
      default() {
        return [];
      },
    },
    contacts: {
      type: Object,
      default() {
        return {};
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
