import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import "./style.scss"

const app = document.querySelector("#app") as HTMLDivElement

app.innerHTML = `
  <h1>Hello Matt!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
