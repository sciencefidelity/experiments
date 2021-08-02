// Animated colour changer / strobe / disco light.

"use strict"

const shape = document.getElementById("shape") as HTMLDivElement

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
