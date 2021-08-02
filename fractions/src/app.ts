"use strict"

const btn = document.getElementById("btn")
const turntable = document.querySelector("main")

if (btn)
  btn.onclick = () => {
    if (turntable && turntable.className === "stop") {
      turntable.className = "spin"
    } else {
      if (turntable) turntable.className = "stop"
    }
  }
