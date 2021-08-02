const c = document.createElement("canvas") as HTMLCanvasElement
const ctx = c.getContext("2d")
const img1 = new Image()
const placeholder = document.getElementById("image1") as HTMLImageElement

img1.onload = function () {
  if (placeholder) placeholder.remove()

  const parent = document.getElementById("container") as HTMLDivElement
  const w = img1.width
  const h = img1.height

  c.width = w
  c.height = h
  if (ctx) {
    ctx.drawImage(img1, 0, 0)

    const pixelArr = ctx.getImageData(0, 0, w, h).data
    const sample_size = 50 // Adjusts the pixel size

    for (let y = 0; y < h; y += sample_size) {
      for (let x = 0; x < w; x += sample_size) {
        const p = (x + y * w) * 4
        ctx.fillStyle =
          "rgba(" +
          pixelArr[p] +
          "," +
          pixelArr[p + 1] +
          "," +
          pixelArr[p + 2] +
          "," +
          pixelArr[p + 3] +
          ")"
        ctx.fillRect(x, y, sample_size, sample_size)
      }
    }
  }

  const img2 = new Image()
  img2.src = c.toDataURL("image/jpeg")
  parent.append(img2)
}

if (placeholder) img1.src = placeholder.src
