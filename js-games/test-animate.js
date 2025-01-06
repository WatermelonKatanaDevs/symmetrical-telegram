gameEnv.clearCanvas();
const { ctx, canvas } = gameEnv;

ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

let x = 0;
function animate() {
    gameEnv.clearCanvas();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(x, canvas.height / 2, 30, 0, Math.PI * 2);
    ctx.fill();

    x += 2;
    if (x > canvas.width) x = 0;

    requestAnimationFrame(animate);
}

animate();
