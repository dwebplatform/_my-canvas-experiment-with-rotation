const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;

canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

function drawAngle(alfa) {
  ctx.save();
  ctx.rotate(alfa);
  for (let i = 0; i < 10; i++) {
    ctx.rect(i * 12, -10 / 2, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
  }
  ctx.restore();
  ctx.save();
  ctx.rotate(-alfa);
  for (let i = 0; i < 10; i++) {
    ctx.rect(i * 12, -10 / 2, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
  }
  ctx.restore();
}
const drawMiddle = () => {
  ctx.translate(canvas.width / 2, canvas.height / 2);
  drawAngle(Math.PI / 2);
};
drawMiddle();
