"use strict"

console.log("Venn Diagram")

const modeSwitch = document.getElementById("mode")
const background = document.getElementById("site-main")
const mode = document.getElementById("mode")

modeSwitch.onclick = () => {
  if (background.className === "light") {
    background.className = "dark"
    mode.className = "darkmode"
  } else {
    background.className = "light"
    mode.className = "lightmode"
  }
}