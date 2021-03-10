"use strict"

let r = 0
let g = 0
let b = 0

document.getElementById("main").addEventListener("click", colorFunction)

function colorFunction() {
  document.getElementById("main").style.background = "rgb(" + myFun(r) + "," + myFun(g) + "," + myFun(b) + ")"
  document.getElementById("colorRGB").innerHTML = "rgb(" + myFun(r) + ", " + myFun(g) + ", " + myFun(b) + ")"
}

function myFun(r, g, b) {
  return r = (Math.random() * 255).toFixed(0)
  return g = (Math.random() * 255).toFixed(0)
  return b = (Math.random() * 255).toFixed(0)
}
