"use strict"

// console.log('Hello world!')

const modeSwitch = document.getElementById("modeSwitch")
const textLeft = document.getElementById("textLeft")
const textRight = document.getElementById("textRight")

modeSwitch.onclick = () => { 
  if (textLeft.className === "light-mode-left") {
    textLeft.className = "dark-mode-left"
    textRight.className = "dark-mode-right"
  } else {
    textLeft.className = "light-mode-left"
    textRight.className = "light-mode-right"
  }
}



