"use strict"

const btn = document.getElementById("btn")
const turntable = document.getElementById("container")

btn.onclick = () => {
  console.log("Clicked")
  if (turntable.className === "stop") {
    turntable.className = "spin"
  } else {
    turntable.className = "stop"
  }
}


