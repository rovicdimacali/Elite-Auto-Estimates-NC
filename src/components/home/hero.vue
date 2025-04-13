<template>
  <section class="hero">
    <div class="overlay"></div>
    <video autoplay muted loop playsinline alt="dexterton-corporate-video">
      <source
        src="https://cdn-eae.need-clients.com/eliteautoestimates-hero.mp4"
        type="video/mp4"
      />
    </video>
    <div class="hero-content col">
      <header class="hero-header col">
        <h1 data-aos="fade-down" data-aos-duration="3000">
          ELITE AUTO ESTIMATES
        </h1>
      </header>
      <div class="subheader wrap">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="500"
          class="cta col"
        >
          <h2>Top-Rated Auto Damage Appraisal Services in Colorado</h2>
          <a href="" class="row-10 request" @click.prevent="scrollTo('#form')"
            ><p>Request an Estimate Now</p>
            <i class="pi pi-arrow-right"></i
          ></a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="1000"
          class="copy col"
        >
          <p>
            At Elite Auto Estimates, we've revolutionized the auto damage
            appraisal process. Our innovative system delivers industry-leading
            cycle times while maintaining the highest standards of accuracy.
            From standard vehicles to heavy equipment, we provide comprehensive
            appraisal services that keep your customers satisfied and their
            vehicles moving through repairs efficiently.
          </p>
        </div>
      </div>
    </div>
  </section>
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
