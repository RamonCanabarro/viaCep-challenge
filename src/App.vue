<script>
import NavBar from "@/components/navbar/NavBar.vue";
import SideBar from "@/components/sidebar/SideBar.vue";
export default {
  components: { NavBar, SideBar },
  data: () => ({
    open: true,
    items: [
      "ion-social-html5-outline",
      "ion-social-nodejs",
      "ion-social-css3-outline",
      "ion-social-github",
    ],
  }),
  methods: {
    toggleDrawer() {
      this.open = !this.open;
    },
  },
};
</script>

<template>
  <SideBar :open="open" :items="items" />
  <NavBar @toggle-nav-drawer="toggleDrawer" />
  <router-view />
</template>

<style lang="scss">
@import "@/assets/base.css";
@import "@/assets/styles/index.scss";
</style>
