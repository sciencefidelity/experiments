let ctx = canvas.getContext('2d'),
    img = new Image(),
    play = false;
    
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

img.onload = pixelate;

img.src = './images/mops-lg.jpg';

function pixelate(v) {
  
  let size = (play ? v : blocks.value) * 0.01,
      w = canvas.width * size,
      h = canvas.height * size;
    
//  console.log(size)
  ctx.drawImage(img, 0, 0, w, h);
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}

function toggleAnim() {
  let v = Math.min(25, parseInt(blocks.value, 10)),
      dx = 0.5; /// "speed"
  play = !play;
  animate.value = play ? 'stop' : 'Animate';
  
  if (play === true) anim();
  
  function anim() {
    v += dx;
    if (v <= 1 || v > 25) dx = -dx;
    pixelate(v);
    if (play) requestAnimationFrame(anim);
  }
}

blocks.addEventListener('change', pixelate, false);
animate.addEventListener('click', toggleAnim, false);

window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();