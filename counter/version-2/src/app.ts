// Count-up that triggers on click of a button
// adjust speed and updateCount to change duration

"use strict"

const animationDuration = 2000
const frameDuration = 1000 / 20
const totalFrames = Math.round(animationDuration / frameDuration)
const easeOutQuad = (t: number) => t * (2 - t)

const animateCountUp = (el: any) => {
  let frame = 0
  const target = parseInt(el.getAttribute('data-target'), 10)
  const counter = setInterval(() => {
    frame++
    const progress = easeOutQuad(frame / totalFrames)
    const currentCount = Math.round(target * progress)

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount
    }

    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, frameDuration)
}

// Start count with button click

const btn = document.getElementById('btn')

btn.onclick = () => {
  const counters = document.querySelectorAll('h1')
  counters.forEach(animateCountUp)
}
