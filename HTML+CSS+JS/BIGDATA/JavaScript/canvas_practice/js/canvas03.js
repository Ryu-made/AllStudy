document.addEventListener('DOMContentLoaded', () => {
  const ctx = createCanvas().getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';

  const body = document.body;
  body.style.width = '100vw';
  body.style.minHeight = '100vh';

  // 동그라미
  const circleBlue = () => {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'skyblue';
    const p1 = new Path2D();
    p1.arc(50, 50, 15, 0, Math.PI * 2);
    ctx.fill(p1);
  }

  const circleRed = () => {
    ctx.moveTo(75, 90);
    ctx.fillStyle = 'tomato';
    const p2 = new Path2D();
    p2.arc(50, 90, 15, 0, Math.PI * 2);
    ctx.fill(p2);
  }

  // ctx.moveTo(95, 160);
  // ctx.fillStyle = 'palegreen';
  // const p3 = new Path2D();
  // p3.arc(50, 160, 45, 0, Math.PI * 2);
  // ctx.fill(p3);
  // ctx.stroke();

  // ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  // ctx.save();
  // const sun = new Image();
  // sun.src = 'https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_sun.png';
  // ctx.translate(150, 150);
  // ctx.drawImage(sun, 200, 200);
  // ctx.restore();

  // 회전
  const draw = () => {
    ctx.clearRect(0, 0, 300, 300); // 캔버스를 비운다

    // ctx.fillStyle = "rgba(0,0,0,0.4)";
    // ctx.strokeStyle = "rgba(0,153,255,0.4)";

    ctx.save();
    const time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
    );
    ctx.translate(100, 210);
    // ctx.fillRect(0, -12, 50, 24);
    circleBlue();
    ctx.restore();
    ctx.drawImage(sun, 0, 0, 300, 300);
    // ctx.drawImage(sun, 0, 0);
  }
  setInterval(draw, 100);

})

// const draw = () => {

// };


const createCanvas = () => {
  const canvas = document.body.appendChild(document.createElement('canvas'));
  canvas.id = 'canvas';
  canvas.width = 500;
  canvas.height = 500;
  canvas.style.position = 'absolute';
  canvas.style.top = '30vh';
  canvas.style.left = '40vw';
  return canvas;
};

const sun = new Image();
sun.src = 'https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_sun.png';