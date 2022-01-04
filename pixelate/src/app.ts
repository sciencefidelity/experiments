const canvas = document.querySelector("#canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")
const img = new Image() as HTMLImageElement
let play = false
const blocks = document.querySelector("#blocks") as HTMLInputElement
const animate = document.querySelector("#animate") as HTMLInputElement

window.onload = () => firstDraw()

const firstDraw = () => {
  const initialImageURL = "./images/umbrella-lg.jpg"
  draw(initialImageURL)
}
const draw = (imgURL: string) => {
  if (ctx) {
    img.crossOrigin = "anonymous"
    img.src = imgURL

    img.onload = function () {
      canvas.height = img.height / 4
      canvas.width = img.width / 4
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      // pixelate(v)
    }
  }
}

const pixelate = (v: any) => {
  if (ctx) {
    canvas.height = img.height
    canvas.width = img.width

    const size = Number(play ? v : blocks.value) * 0.01
    const w = canvas.width * size
    const h = canvas.height * size

    ctx.drawImage(img, 0, 0, w, h)
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height)
  }
}

const toggleAnim = () => {
  let v = Math.min(20, parseInt(blocks.value, 10))
  let dx = 0.01 // "speed"
  play = !play
  animate.value = play ? "stop" : "Animate"

  const anim = () => {
    v += dx
    if (v <= 1 || v > 20) dx = -dx
    console.log(v)
    pixelate(v)
    if (play) requestAnimationFrame(anim)
  }

  if (play === true) anim()
}

blocks.addEventListener("change", pixelate, false)
animate.addEventListener("click", toggleAnim, false)

window.requestAnimationFrame = (() => {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

export {}
