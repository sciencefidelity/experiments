// Generate a random color upon clicking anywhere on screen
// Display the RGB value of the generaten color

"use strict"

const canvas: HTMLElement = document.querySelector("main")
const code: HTMLParagraphElement = document.querySelector("p")
let r: number = 0
let g: number = 0
let b: number = 0

canvas.onclick = () => {
  canvas.style.background = `rgb(${color(r)}, ${color(g)}, ${color(b)})`
  code.innerHTML = `rgb(${color(r)}, ${color(g)}, ${color(b)})`
}

const color = (r, g, b) => {
  r = (Math.random() * 255).toFixed(0)
  g = (Math.random() * 255).toFixed(0)
  b = (Math.random() * 255).toFixed(0)
  return r, g, b
}
