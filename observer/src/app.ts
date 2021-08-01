"use strict"

// const red = <HTMLDivElement>document.querySelector("#red")
// const orange = <HTMLDivElement>document.querySelector("#orange")
// const yellow = <HTMLDivElement>document.querySelector("#yellow")
// const green = <HTMLDivElement>document.querySelector("#green")
// const blue = <HTMLDivElement>document.querySelector("#blue")
// const indigo = <HTMLDivElement>document.querySelector("#indigo")

const numSteps = 20.0

let boxElement: HTMLDivElement
let prevRatio = 0.0
let increasingColor = "rgba(40, 40, 190, ratio)"
let decreasingColor = "rgba(190, 40, 40, ratio)"

window.addEventListener(
  "load",
  event => {
    boxElement = <HTMLDivElement>document.querySelector("#box")

    createObserver()
  },
  false
)

function createObserver() {
  let observer

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  }

  observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(boxElement)
}

function buildThresholdList() {
  let thresholds = []
  let numSteps = 20

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

function handleIntersect(entries: any, observer: any) {
  entries.forEach((entry: any) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio
      )
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio
      )
    }

    prevRatio = entry.intersectionRatio
  })
}
