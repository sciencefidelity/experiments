let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    img = new Image(),
    play = false

window.onload = firstDraw()

function firstDraw() {
  let initialImageURL = './images/umbrella-lg.jpg'
  draw(initialImageURL)
}
function draw (imgURL) {
  img.crossOrigin="anonymous"
  img.src = imgURL

  img.onload = function() {
    canvas.height = img.height/4
    canvas.width = img.width/4
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    pixelate()
  }
}
function pixelate(v) {
  canvas.height = img.height
  canvas.width = img.width
  
  let size = (play ? v : blocks.value) * 0.01,
      w = canvas.width * size,
      h = canvas.height * size
    
//  console.log(size)
  ctx.drawImage(img, 0, 0, w, h)
  
  ctx.mozImageSmoothingEnabled = false
  ctx.webkitImageSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height)
}

function toggleAnim() {
  let v = Math.min(20, parseInt(blocks.value, 10)),
      dx = 0.01; // "speed"
  play = !play;
  animate.value = play ? 'stop' : 'Animate'
  
  if (play === true) anim()
  
  function anim() {
    v += dx
    if (v <= 1 || v > 20) dx = -dx
    pixelate(v)
    if (play) requestAnimationFrame(anim)
  }
}

blocks.addEventListener('change', pixelate, false)
animate.addEventListener('click', toggleAnim, false)

window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }
})()