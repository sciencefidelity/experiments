const canvas = document.querySelector("#canvas") as HTMLDivElement
const slider = document.querySelector("#range") as HTMLInputElement
const SQUARES = 10
// const HMIN = 0
const HMAX = 270
const initializeCanvas = () => {
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    const H = (HMAX / SQUARES) * i
    const S = 50
    const L = 50
    square.className = `color-${i}`
    square.style.width = `${10 * (i + 1)}%`
    // square.style.backgroundColor = `hsl(${H}, ${S}%, ${L}%)`
    canvas.appendChild(square)
  }
}
initializeCanvas()

const changeColor = () => {
  const range = document.querySelector("#range") as HTMLInputElement
  const val = range.value
  for (let i = 0; i < SQUARES; i++) {
    const H = (HMAX / SQUARES) * i
    // const S = 50
    const L = 50
    const square = document.querySelector(`color-${i}`) as HTMLDivElement
    square.style.backgroundColor = `hsl(${H}, ${val}%, ${L}%)`
  }
}

slider.addEventListener("input", changeColor)

