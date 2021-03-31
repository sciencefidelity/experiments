// Generate a random color upon clicking anywhere on screen
// Display the RGB value of the generaten color

"use strict"

const canvas = document.querySelector("main")
const code = document.querySelector("p")
const r = 0
const g = 0
const b = 0

canvas.onclick = () => {
  canvas.style.background = 
    "rgb(" + color(r) + "," + color(g) + "," + color(b) + ")"
  code.innerHTML = 
    "rgb(" + color(r) + ", " + color(g) + ", " + color(b) + ")"
}

const color = (r, g, b) => {
  r = (Math.random() * 255).toFixed(0)
  g = (Math.random() * 255).toFixed(0)
  b = (Math.random() * 255).toFixed(0)
  return r, g, b
}
