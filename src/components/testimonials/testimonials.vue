<template>
  <section class="testimonials">
    <h2>testimonials</h2>
    <p>
      Life-changing experiences await. Discover what our customers have to say.
    </p>

    <Vue3Marquee
      class="testimonial-row row"
      :duration="100"
      style="gap: 30px"
      :pauseOnHover="true"
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
    </Vue3Marquee>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPaused: false,
      testimonials: [
        {
          name: "David M.",
          location: "Denver, CO",
          testimonial:
            "I was amazed at how quickly they responded—got my estimate the same day without leaving home. Super convenient and stress-free.",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Laura S.",
          location: "Colorado Springs, CO",
          testimonial:
            "The whole process was so flexible—I could submit everything online at my own pace and still got results fast.",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Chris J.",
          location: "Boulder, CO",
          testimonial:
            "They moved things along way faster than my insurance company. The quick turnaround made a huge difference.",
          avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        },
        {
          name: "Ashley R.",
          location: "Fort Collins, CO",
          testimonial:
            "It was incredibly easy to get an estimate from home. Fast, flexible, and professional service all around.",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          name: "Kevin L.",
          location: "Aurora, CO",
          testimonial:
            "I loved how quickly they delivered my estimate. Their flexible approach fit perfectly with my busy schedule.",
          avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        },
      ],
      rating: 5,
    };
  },
};
</script>

<style></style>
