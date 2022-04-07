import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "@/style.scss"

const canvas = document.querySelector("#canvas") as HTMLDivElement

// const canvasHeight = 400
// const lineGap = 40

const initializeCanvas = () => {
  for (let i = 1; i <= 9; i++) {
    const line = document.createElement("div")
    line.className = "line"
    // line.style.width = "100%"
    // line.style.height = "5px"
    // line.style.backgroundColor = "hsl(0, 0%, 0%)"
    // line.style.backgroundColor = "red"
    canvas.appendChild(line)
  }
}
initializeCanvas()
