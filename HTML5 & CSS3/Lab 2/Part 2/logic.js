const myCanvas = document.querySelector("#myCanvas");
var ctx = myCanvas.getContext("2d");
let x = 0,
  y = 0;

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "purple";
ctx.moveTo(0, 0);

let canvasAnimation = setInterval(() => {
  ctx.lineTo(x, y);
  ctx.stroke();
  x += 20;
  y += 20;

  if (x > 320 && y > 320) {
    alert("Animation End");
    clearInterval(canvasAnimation);
  }
}, 200);
