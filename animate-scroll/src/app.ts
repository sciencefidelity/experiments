import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    end: "+=300%",
    scrub: true,
    pin: true,
  }
})

// prettier-ignore
tl.from(".box", { duration: 1, x: "80vw" })
  .from(".box", { duration: 1, scale: 0.75 })
  .from(".box", { duration: 0.5 })
