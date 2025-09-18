<template>
  <footer class="col">
    <div class="image-header">
      <img src="https://cdn-eae.need-clients.com/City%20Shadows.png" />
    </div>
    <div class="footer-content">
      <div class="content wrap">
        <div class="company-info col">
          <img
            src="https://cdn-eae.need-clients.com/eae-logo.png"
            alt="Elite Auto Estimates Logo"
          />
          <div class="address">
            <p>Elite Auto Estimates</p>
            <p>4610 S Ulster St, Ste 150</p>
            <p>Denver, Colorado, 80237</p>
          </div>
          <div class="email">
            <p>720-710-5162</p>
          </div>
          <div class="email">
            <p>support@eliteautoestimates.com</p>
          </div>
        </div>
        <div class="links wrap">
          <div class="navlinks col-10">
            <p class="p-0">Useful Links</p>
            <a href="#home" @click.prevent="scrollTo('#home')">Home</a>
            <a href="#services" @click.prevent="scrollTo('#services')"
              >Services</a
            >
            <a href="#about-us" @click.prevent="scrollTo('#about-us')"
              >About Us</a
            >
            <a href="#benefits" @click.prevent="scrollTo('#benefits')"
              >Benefits</a
            >
          </div>
          <div class="navlinks col-10">
            <p class="p-0">Legal Links</p>
            <a href="#home" @click.prevent="scrollTo('#home')"
              >Terms & Agreement</a
            >
            <a href="#services" @click.prevent="scrollTo('#services')"
              >Privacy Policy</a
            >
          </div>
        </div>
        <div class="newsletter">
          <p>Join our Mailing List:</p>
          <div class="input-container row">
            <InputText id="first_name" name="first_name" placeholder="Email" />
            <Button label="Submit" severity="contrast" />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© Elite Auto Estimates 2025. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
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
    },
  },
};
</script>

<style></style>
