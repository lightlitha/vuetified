<template>
  <span>
    <mobile-nav
      :links="links.navbar"
      :socials="links.social"
      :contacts="links.contacts"
      :logo="logo"
      class="hidden-md-and-up"
    />

    <desktop-nav
      :links="links.navbar"
      :socials="links.social"
      :contacts="links.contacts"
      :logo="logo"
      class="hidden-sm-and-down"
    />
  </span>
</template>

<script>
import DesktopNav from "@/components/NavTwo/Desktop.vue";
import MobileNav from "@/components/NavTwo/Mobile.vue";

export default {
  name: "NavTwo",
  components: { DesktopNav, MobileNav },
  computed: {
    logo() {
      return { name: "Brand." };
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
