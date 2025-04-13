<template>
  <navbar />
  <hero id="home" />
  <services id="services" />
  <whoweare id="about-us" />
  <testimonials id="testimonials" />
  <benefits id="benefits" />
  <appraisalform id="form" />
  <Footer />
</template>

<script>
import navbar from "@/layouts/navbar.vue";
import hero from "@/components/home/hero.vue";
import services from "@/components/services/services.vue";
import whoweare from "@/components/whoweare/whoweare.vue";
import testimonials from "@/components/testimonials/testimonials.vue";
import benefits from "@/components/benefits/benefits.vue";
import appraisalform from "@/components/appraisalform/appraisalform.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  components: {
    navbar,
    hero,
    services,
    whoweare,
    testimonials,
    benefits,
    appraisalform,
    Footer,
  },
};
</script>

<style></style>
