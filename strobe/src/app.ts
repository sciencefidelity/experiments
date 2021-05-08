// Animated colour changer / strobe / disco light.

"use strict"

const shape: HTMLElement = document.getElementById("shape")

let i: number = 0
shape.className = "c" + i

const colorChange = () => {
  i++
  if (i === 6) {
    i = 0
  }
  shape.className = "c" + i
}

setInterval(colorChange, 2000)
