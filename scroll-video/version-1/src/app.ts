"use strict"

let frameNumber = 0
const playbackConst = 500
const setHeight = document.querySelector("#set-height") as HTMLDivElement
const vid = document.querySelector("#v0") as HTMLVideoElement

vid.addEventListener("loadedmetadata", function () {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px"
})

function scrollPlay() {
  frameNumber = window.pageYOffset / playbackConst
  vid.currentTime = frameNumber
  window.requestAnimationFrame(scrollPlay)
  console.log(frameNumber)
}

window.requestAnimationFrame(scrollPlay)
