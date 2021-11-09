<template>
  <span>
    <mobile-nav
      :links="links.navbar"
      :navbtn="links.navbtn"
      :logo="logo"
      class="hidden-md-and-up"
    />

    <desktop-nav
      :links="links.navbar"
      :navbtn="links.navbtn"
      :logo="logo"
      class="hidden-sm-and-down"
    />
  </span>
</template>

<script>
import DesktopNav from "@/components/NavFour/Desktop.vue";
import MobileNav from "@/components/NavFour/Mobile.vue";

export default {
  name: "GuestNav",
  components: { DesktopNav, MobileNav },
  computed: {
    logo() {
      return { name: "The Ecosystem" };
    },
    links() {
      return this.$store.getters.appBarNav;
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      await this.$store.dispatch(
        `${this.$IYA.NAMESPACE.NAVIGATION}/${this.$IYA.ACTION.APPBARNAV_FETCH}`
      );
    },
  },
};
</script>
