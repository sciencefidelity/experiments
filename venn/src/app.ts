"use strict"

const modeSwitch: HTMLElement = document.getElementById("mode")
const background: HTMLElement = document.getElementById("site-main")
const mode: HTMLElement = document.getElementById("mode")

modeSwitch.onclick = () => {
  if (background.className === "light") {
    background.className = "dark"
    mode.className = "darkmode"
  } else {
    background.className = "light"
    mode.className = "lightmode"
  }
}
