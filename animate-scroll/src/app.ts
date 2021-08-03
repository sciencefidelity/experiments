import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

// prettier-ignore
tl.from("#box", { duration: 1.5, x: 270 })
  .from("#box", { duration: 0.75, scale: 0.75 })
