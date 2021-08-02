const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")
const img = new Image() as HTMLImageElement
const blocks = document.getElementById("blocks") as HTMLInputElement

window.onload = (() => firstDraw())

function firstDraw() {
  const initialImageURL = "./images/umbrella-lg.jpg"
  draw(initialImageURL)
}

function draw(imgURL: string) {
  if (ctx) {
    img.crossOrigin = "anonymous"
    img.src = imgURL

    img.onload = function () {
      canvas.height = img.height / 4
      canvas.width = img.width / 4
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      pixelate()
    }
  }
}

function pixelate() {
  if (ctx) {
    canvas.height = img.height
    canvas.width = img.width

    const size = Number(blocks.value) * 0.01
    const w = canvas.width * size
    const h = canvas.height * size

    ctx.drawImage(img, 0, 0, w, h)
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height)
  }
}

blocks.addEventListener("change", pixelate, false)

window.requestAnimationFrame = (() => {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()
