<template>
  <Drawer
    v-model:visible="localVisible"
    header="Right Drawer"
    position="right"
    :showCloseIcon="false"
    class="sidebar"
  >
    <template #header>
      <div class="logo-container row">
        <img
          src="https://cdn-eae.need-clients.com/eliteautoestimates-logo.webp"
        />
        <i class="pi pi-times" @click="$emit('close')"></i>
      </div>
    </template>

    <div class="navlinks col-10">
      <a href="#home" @click.prevent="scrollTo('#home')">Home</a>
      <a href="#services" @click.prevent="scrollTo('#services')">Services</a>
      <a href="#about-us" @click.prevent="scrollTo('#about-us')">About Us</a>
      <a href="#benefits" @click.prevent="scrollTo('#benefits')">Benefits</a>
      <a href="#form" @click.prevent="scrollTo('#form')">Book a Call</a>
    </div>
  </Drawer>
</template>

<script>
export default {
  props: ["visible"],
  data() {
    return {
      localVisible: false,
    };
  },

  methods: {
    scrollTo(selector) {
      const target = document.querySelector(selector);
      if (target && window.lenis) {
        window.lenis.scrollTo(target, {
          offset: 0,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });
      }

      this.$emit("close");
    },
  },

  watch: {
    localVisible: {
      handler(newVal) {
        if (!newVal) {
          this.$emit("close");
        }
      },
    },
    visible: {
      handler(newVal) {
        this.localVisible = this.visible;
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
