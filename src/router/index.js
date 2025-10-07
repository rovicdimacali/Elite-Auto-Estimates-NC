import Home from "@/views/home.vue";
import privacypolicy from "@/views/privacypolicy.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/privacy-policy",
      name: "privacypolicy",
      component: privacypolicy,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      // Wait for the DOM to paint, then let Lenis handle scrolling
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            if (window.lenis) {
              window.lenis.scrollTo(el, {
                offset: 0,
                duration: 1.2,
                easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
              });
              resolve(false); // tell router we handled it
            } else {
              resolve({ el: to.hash, behavior: "smooth" }); // fallback
            }
          } else {
            resolve({ top: 0 });
          }
        });
      });
    }

    return { top: 0 };
  },
});

export default router;
