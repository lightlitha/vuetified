<template>
  <v-main>
    <nav-one />
    <span class="ma-5"></span>
    <nav-two />
    <span class="ma-5"></span>
    <nav-three />
  </v-main>
</template>

<script>
import NavOne from "./NavOne.vue";
import NavTwo from "./NavTwo.vue";
import NavThree from "./NavThree.vue";

export default {
  name: "Navigation",
  components: { NavOne, NavTwo, NavThree },
};
</script>
