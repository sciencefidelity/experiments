"use strict"

const modeSwitch = document.getElementById("mode") as HTMLDivElement
const background = document.getElementById("site-main") as HTMLElement
const mode = document.getElementById("mode") as HTMLDivElement

if (modeSwitch)
  modeSwitch.onclick = () => {
    if (background && background.className === "light") {
      background.className = "dark"
      if (mode) mode.className = "darkmode"
    } else {
      if (background) background.className = "light"
      if (mode) mode.className = "lightmode"
    }
  }
