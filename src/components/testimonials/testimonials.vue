<template>
  <section class="testimonials">
    <h2>testimonials</h2>
    <p>
      Life-changing experiences await. Discover what our customers have to say.
    </p>

    <vue-marquee-slider
      id="marquee-slider-loop"
      :speed="200000"
      :autoWidth="true"
      space="30"
      class="testimonial-row row"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card col"
      >
        <div class="header row">
          <div class="image-container">
            <img
              :src="testimonial.avatar"
              alt="Elite Auto Estimates Customer Testimonial"
            />
          </div>
          <div class="customer-info col">
            <p>{{ testimonial.name }}</p>
            <small>{{ testimonial.location }}</small>
          </div>
          <div class="rating">
            <Rating v-model="rating" readonly severity="secondary" />
          </div>
        </div>
        <div class="content">"{{ testimonial.testimonial }}"</div>
      </div>
    </vue-marquee-slider>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "David M.",
          location: "Denver, CO",
          testimonial:
            "I was skeptical at first, but the whole process was seamless. I got a detailed estimate within a few hours and didn’t even have to leave my house.",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Laura S.",
          location: "Colorado Springs, CO",
          testimonial:
            "Elite Auto Estimates saved me hundreds on my lease return. The photos and guidance were super easy to follow.",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Chris J.",
          location: "Boulder, CO",
          testimonial:
            "My insurance company was dragging their feet, but this estimate helped me speed things up. Totally worth it.",
          avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        },
        {
          name: "Ashley R.",
          location: "Fort Collins, CO",
          testimonial:
            "They made it incredibly easy to get an estimate without stepping foot in an establishment. The service was fast, friendly, and professional.",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          name: "Kevin L.",
          location: "Aurora, CO",
          testimonial:
            "The estimate was very accurate and helped me negotiate a better price when selling my car. Highly recommend!",
          avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        },
      ],
      rating: 5,
    };
  },
};
</script>

<style></style>
