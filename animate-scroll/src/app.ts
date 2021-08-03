import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#container",
    // start: "top 40%",
    // end: "bottom 20%",
    scrub: true,
    pin: true,
    markers: true,
    toggleActions: "restart pause reverse pause"
  }
})

// prettier-ignore
tl.from("#box", { duration: 1, x: "75vw" })
  .from("#box", { duration: 1, scale: 0.75 })
  .from("#box", { duration: 1 })
