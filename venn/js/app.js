"use strict"

console.log("hello")

const modeSwitch = document.getElementById("mode")
const background = document.getElementById("site-main")

modeSwitch.onclick = () => {
  if (background.className === "light") {
    background.className = "dark"
  } else {
    background.className = "light"
  }
}