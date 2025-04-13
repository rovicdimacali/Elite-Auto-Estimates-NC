import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

window.lenis = lenis;
