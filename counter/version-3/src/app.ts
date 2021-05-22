// Count-up that triggers on entering viewport

"use strict"

const animationDuration = 2000
const frameDuration = 1000 / 20
const totalFrames = Math.round(animationDuration / frameDuration)
const easeOutQuad = (t: number) => t * (2 - t)

const animateCountUp = (count: Element) => {
  let frame = 0
  const target = parseInt(count.getAttribute('data-target'), 10)
  const counter = setInterval(() => {
    frame++
    const progress = easeOutQuad(frame / totalFrames)
    const currentCount = Math.round(target * progress)

    if (parseInt(count.innerHTML, 10) !== currentCount) {
      count.innerHTML = currentCount.toString()
    }

    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, frameDuration)
}

// Checker the viewport
const countersInView = (el: Element) => {
  const scroll = window.scrollY || window.pageYOffset
  const boundsTop = el.getBoundingClientRect().top + scroll

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  }

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  }

  return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
    || (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
}

// Use the checker
document.addEventListener('DOMContentLoaded', () => {
  const tester = document.querySelector('#count')
  const answer = document.querySelector('#answer')

  const handler = () => raf( () => {
    console.log("hello")
    answer.innerHTML = 'Are the numbers in view? ' + (countersInView(tester) ? 'Yes' : 'No')
    const counters = document.querySelectorAll('h1')
    counters.forEach(animateCountUp)
  })

  handler()
  window.addEventListener('scroll', handler)
})

// requestAnimationFrame
const raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

// Start count with button click

const btn = document.getElementById('btn')

btn.onclick = () => {
  const counters = document.querySelectorAll('h1')
  counters.forEach(animateCountUp)
}
