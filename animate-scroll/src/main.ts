import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import "./style.scss"

const app = document.querySelector<HTMLDivElement>("#app")

if (app) {
  app.innerHTML = `
  <h1>Hello Matt!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
}
