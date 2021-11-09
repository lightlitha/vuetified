<template>
  <v-row>
    <v-col cols="12">
      <span class="title ma-16">Navigations</span>
      <navigations class="ma-8 pa-8" />
    </v-col>
  </v-row>
</template>

<script>
import Navigations from "./navigation";

export default {
  name: "Home",

  components: {
    Navigations,
  },
};
</script>
