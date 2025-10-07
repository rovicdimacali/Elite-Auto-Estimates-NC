<template>
  <sidebar :visible="sidebarVisible" @close="sidebarVisible = false" />
  <nav :class="['navbar', 'row', { transparent: atTop && !isPrivacyRoute }]">
    <div class="logo-container">
      <RouterLink to="/">
        <img
          src="https://cdn-eae.need-clients.com/eae-logo.png"
          alt="Elite Auto Estimates Logo"
        />
      </RouterLink>
    </div>
    <div class="navlinks row">
      <RouterLink :to="{ path: '/' }">Home</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#services' }">Services</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#about-us' }">About Us</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#benefits' }">Benefits</RouterLink>
      <a href="https://blogs.eliteautoestimates.com" target="_blank">Blogs</a>
    </div>

    <div class="book-now-container">
      <RouterLink class="book-btn" :to="{ path: '/', hash: '#form' }"
        >Book a Call</RouterLink
      >
    </div>

    <i class="pi pi-bars burger-icon" @click="sidebarVisible = true"></i>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import sidebar from "./sidebar.vue";

export default {
  components: { sidebar, RouterLink },
  data() {
    return {
      atTop: true,
      sidebarVisible: false,
    };
  },

  computed: {
    // disable transparent class when on privacy-policy route
    isPrivacyRoute() {
      const r = this.$route || {};
      return (
        r.name === "privacy-policy" ||
        (r.path && r.path.includes("/privacy-policy"))
      );
    },
  },

  methods: {
    handleScroll() {
      if (!this.isPrivacyRoute) this.atTop = this.isAtTop();
      else this.atTop = false;
    },

    isAtTop() {
      return window.scrollY <= 100;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.atTop = this.isPrivacyRoute ? false : this.isAtTop();
  },

  watch: {
    $route() {
      this.atTop = this.isPrivacyRoute ? false : this.isAtTop();
    },
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
