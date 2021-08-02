"use strict"

const modeSwitch: HTMLElement | null = document.getElementById("mode")
const background: HTMLElement | null = document.getElementById("site-main")
const mode: HTMLElement | null = document.getElementById("mode")

if(modeSwitch) modeSwitch.onclick = () => {
  if (background && background.className === "light") {
    background.className = "dark"
    if(mode) mode.className = "darkmode"
  } else {
    if(background) background.className = "light"
    if(mode) mode.className = "lightmode"
  }
}
