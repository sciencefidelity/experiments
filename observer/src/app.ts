let boxElement: HTMLDivElement
let prevRatio = 0.0
const increasingColor = "rgba(40, 40, 190, ratio)"
const decreasingColor = "rgba(190, 40, 40, ratio)"

window.addEventListener(
  "load",
  _event => {
    boxElement = document.querySelector("#box") as HTMLDivElement
    createObserver()
  },
  false
)

function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  }

  const observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(boxElement)
}

function buildThresholdList() {
  const thresholds = []
  const numSteps = 20

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

function handleIntersect(
  entries: IntersectionObserverEntry[],
  _observer: IntersectionObserver
) {
  entries.forEach((entry: IntersectionObserverEntry) => {
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

export {}
