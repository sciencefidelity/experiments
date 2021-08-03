import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const horizontalImages = document.querySelector(".container--b") as HTMLElement

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container--a",
    end: "+=300%",
    scrub: true,
    pin: true
  }
})

// prettier-ignore
tl.from(".title", { duration: 1, x: "80vw" })
  .from(".title", { duration: 1, scale: 0.75 })
  .from(".title", { duration: 0.5 })

const sections = gsap.utils.toArray(".container__photo")

// prettier-ignore
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container--b",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + horizontalImages.offsetWidth
  }
})
