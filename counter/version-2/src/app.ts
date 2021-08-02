// Count-up that triggers on click of a button
// adjust speed and updateCount to change duration

const animationDuration = 2000
const frameDuration = 1000 / 20
const totalFrames = Math.round(animationDuration / frameDuration)
const easeOutQuad = (t: number) => t * (2 - t)
const counters = document.querySelectorAll(
  "h1"
) as NodeListOf<HTMLHeadingElement>

const animateCountUp = (el: HTMLDivElement) => {
  let frame = 0
  const target = parseInt(el.getAttribute("data-target") || "0", 10)
  const counter = setInterval(() => {
    frame++
    const progress = easeOutQuad(frame / totalFrames)
    const currentCount = Math.round(target * progress)
    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = String(currentCount)
    }
    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, frameDuration)
}

// Start count with button click
const btn = document.getElementById("btn") as HTMLButtonElement
btn.onclick = () => {
  counters.forEach(animateCountUp)
}
