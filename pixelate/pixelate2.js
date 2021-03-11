let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let img = new Image();

window.onload = firstDraw();

function firstDraw() {
  let initialImageURL = './images/umbrella-lg.jpg';
  draw(initialImageURL);
}
function draw (imgURL) {
  img.crossOrigin="anonymous";
  img.src = imgURL;

  img.onload = function() {
    canvas.height = img.height/4;
    canvas.width = img.width/4;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    pixelate();
  };
}
function pixelate() {
  canvas.height = img.height;
  canvas.width = img.width;

  let size = (blocks.value) * 0.01,
  w = canvas.width * size,
  h = canvas.height * size;

  ctx.drawImage(img, 0, 0, w, h);
  
  ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}
blocks.addEventListener('change', pixelate, false);

window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();