"use strict"

const btn = document.getElementById("btn")
const turntable = document.querySelector("main")

btn.onclick = () => {
  if (turntable.className === "stop") {
    turntable.className = "spin"
  } else {
    turntable.className = "stop"
  }
}


