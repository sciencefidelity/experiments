'use strict'

let frameNumber = 0
const playbackConst = 500
const setHeight = document.querySelector<HTMLDivElement>('#set-height')
const vid = document.querySelector<HTMLVideoElement>('#v0')

vid!.addEventListener('loadedmetadata', function() {
  setHeight!.style.height = Math.floor(vid!.duration) * playbackConst + 'px'
})

function scrollPlay() {
  frameNumber = window.pageYOffset / playbackConst
  vid!.currentTime = frameNumber
  window.requestAnimationFrame(scrollPlay)
  console.log(frameNumber)
}

window.requestAnimationFrame(scrollPlay)
