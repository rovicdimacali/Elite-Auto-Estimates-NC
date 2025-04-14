<template>
  <sidebar :visible="sidebarVisible" @close="sidebarVisible = false" />
  <nav :class="['navbar', 'row', { transparent: atTop }]">
    <div class="logo-container">
      <img
        src="https://cdn-eae.need-clients.com/eliteautoestimates-logo.webp"
        alt="Elite Auto Estimates Logo"
      />
    </div>
    <div class="navlinks row">
      <a href="#home" @click.prevent="scrollTo('#home')">Home</a>
      <a href="#services" @click.prevent="scrollTo('#services')">Services</a>
      <a href="#about-us" @click.prevent="scrollTo('#about-us')">About Us</a>
      <a href="#benefits" @click.prevent="scrollTo('#benefits')">Benefits</a>
    </div>
    <div class="book-now-container">
      <a class="book-btn" @click.prevent="scrollTo('#form')">Book a Call</a>
    </div>
    <i class="pi pi-bars burger-icon" @click="sidebarVisible = true"></i>
  </nav>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {
  components: { sidebar },
  data() {
    return {
      atTop: true,
      sidebarVisible: false,
    };
  },

  methods: {
    handleScroll() {
      this.atTop = this.isAtTop();
    },

    isAtTop() {
      return window.scrollY <= 100;
    },

    scrollTo(selector) {
      const target = document.querySelector(selector);
      if (target && window.lenis) {
        window.lenis.scrollTo(target, {
          offset: 0,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // Initialize the atTop property
    this.atTop = this.isAtTop();
  },

  beforeDestroy() {
    // Remove scroll event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
