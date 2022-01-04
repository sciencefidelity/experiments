// Generate a random color upon clicking anywhere on screen
// Display the RGB value of the generaten color

const canvas = document.querySelector("main") as HTMLCanvasElement
const code = document.querySelector("p") as HTMLParagraphElement
const r = 0
const g = 0
const b = 0

canvas.onclick = () => {
  canvas.style.background = `rgb(${colorR(r)}, ${colorG(g)}, ${colorB(b)})`
  code.innerHTML = `rgb(${colorR(r)}, ${colorG(g)}, ${colorB(b)})`
}

const colorR = (r: number) => {
  r = Number((Math.random() * 255).toFixed(0))
  return r
}

const colorG = (g: number) => {
  g = Number((Math.random() * 255).toFixed(0))
  return g
}

const colorB = (b: number) => {
  b = Number((Math.random() * 255).toFixed(0))
  return b
}

export {}
