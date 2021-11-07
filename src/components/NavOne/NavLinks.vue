<template>
  <span>
    <v-menu v-if="links.dropdown" open-on-hover bottom offset-y>
      <template #activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          {{ links.title }}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(dropdown, index) in links.dropdown" :key="index">
          <v-list-item-title>
            <v-btn text @click="goto(dropdown.uri)">
              {{ dropdown.title }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn v-else text @click="goto(links.uri)">
      {{ links.title }}
    </v-btn>
  </span>
</template>

<script>
export default {
  name: "NavLinks",
  props: {
    links: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goto(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>
