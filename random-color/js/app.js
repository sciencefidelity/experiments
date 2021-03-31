// Generate a random color upon clicking anywhere on screen
// Display the RGB value of the generaten color

"use strict"

const canvas = document.querySelector("main")
const code = document.querySelector("p")
let r = 0
let g = 0
let b = 0

canvas.onclick = () => {
  canvas.style.background = "rgb(" + color(r) + "," + color(g) + "," + color(b) + ")"
  code.innerHTML = "rgb(" + color(r) + ", " + color(g) + ", " + color(b) + ")"
}

function color(r, g, b) {
  return r = (Math.random() * 255).toFixed(0)
  return g = (Math.random() * 255).toFixed(0)
  return b = (Math.random() * 255).toFixed(0)
}
