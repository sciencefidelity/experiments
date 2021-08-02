// Animated colour changer / strobe / disco light.

"use strict"

const shape: HTMLElement | null = document.getElementById("shape")

let i = 0
if (shape) shape.className = "c" + i

const colorChange = () => {
  i++
  if (i === 6) {
    i = 0
  }
  if (shape) shape.className = "c" + i
}

setInterval(colorChange, 2000)
