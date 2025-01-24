document.addEventListener('DOMContentLoaded', () => {  
  setBodyStyle();
  const ctx = canvasContext();
  testSaveRestore(ctx);
  testTranslate(ctx);
  testRotate(ctx);
  testScale(ctx);
  testTransform(ctx);
});

const setBodyStyle = () => {
  let style = document.body.style;
  style.display = 'flex';
  style.flexDirection = 'column';
  style.alignItems = 'center';
  style.gap = '10px';
};

const createCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.width = 1000;
  canvas.height = 1200;
  document.body.append(canvas);
  return canvas;
};

// canvas의 그리기 객체 생성
const canvasContext = () => {
  return createCanvas().getContext('2d');
};

// 상태 저장과 되돌리기
const testSaveRestore = ctx => {
  ctx.fillStyle = 'red';
  ctx.fillRect(20, 20, 50, 50);
  ctx.save();
  ctx.fillStyle = 'yellow';
  ctx.fillRect(35, 35, 50, 50);
  ctx.save();
  ctx.fillStyle = 'green';
  ctx.fillRect(50, 50, 50, 50);
  ctx.save();
  ctx.fillStyle = 'blue';
  ctx.fillRect(65, 65, 50, 50);
  ctx.restore();
  ctx.fillRect(80, 80, 50, 50);
  ctx.restore();
  ctx.fillRect(95, 95, 50, 50);
  ctx.restore();
  ctx.fillRect(110, 110, 50, 50);
};

// 도형 이동하기
const testTranslate = ctx => {
  ctx.fillStyle = 'rgb(0, 0, 255)'; // blue
  for (let i = 0; i < 5; i++) { // for-loop
    ctx.save(); // 이전 상태 저장
    ctx.translate(180, (i+1)*25); // translate()를 먼저 하고
    ctx.arc(0, 0, 10, 0, Math.PI*2, 1); // 바뀐 위치(0,0)에서 도형을 그린다.
    ctx.fill(); // 색을 칠함
    ctx.restore(); // 원 상태로 되돌림
  }
};

// 도형 회전하기
const testRotate = ctx => {
  let x = 220, y = 30, w = 100, h = 100;
  ctx.save(); // 이전 상태 저장
  ctx.fillStyle = '#2d6'; // 연두색
  ctx.translate(x, y); // 그릴 위치 이동하기
  ctx.fillRect(0, 0, w, h); // 사각형 그리기
  ctx.restore(); // 되돌림
  
  let tx = x + w/2, ty = y + h/2;
  ctx.save();
  ctx.fillStyle = '#2bf'; // 하늘색
  ctx.translate(tx, ty); // 사각형의 중심 축으로 이동
  ctx.rotate(Math.PI / 8); // = 22.5˚
  ctx.translate(-w/2, -h/2); // 원래 위치로[=(x, y)] 되돌림
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
  
  ctx.save();
  ctx.fillStyle = '#26a'; // 짙은  하늘색
  ctx.translate(tx, ty);
  ctx.rotate(Math.PI / 4); // = 45˚
  ctx.translate(-w/2, -h/2);
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
};

// 도형 확대*축소*대칭
const testScale = ctx => {
  let x = 380, y = 25, w = 50, h = 50;
  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.fillStyle = `rgb(${192 + i*10}, ${48 + i*36}, ${96 + i*36})`;
    ctx.translate(x + i*60, y);
    ctx.scale(1, 1 + i/2); // 세로로 확대
    ctx.fillRect(0, 0, w, h); // 기본 크기(100*100)
    ctx.restore();
  }
  y = 285;
  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.fillStyle = `rgb(${34 + i*36}, ${204 + i*10}, ${20 + i*36})`;
    ctx.translate(x + i*60, y);
    ctx.scale(1, -(1 + i/2)); // 세로 대칭
    ctx.fillRect(0, 0, w, h); // 기본 크기(100*100)
    ctx.restore();
  }

  x += 50, y = 145;
  ctx.fillStyle = '#000';
  ctx.translate(x, y);
  ctx.save();
  ctx.scale(1, 1);
  ctx.font = '24px serif';
  ctx.fillText('CAFE', 0, 0);
  ctx.restore();

  ctx.save();
  ctx.scale(-1, 1);
  ctx.font = '24px serif';
  ctx.fillText('CAFE', 10, 0);
  ctx.restore();

  ctx.save();
  ctx.scale(1, -1);
  ctx.font = '24px serif';
  ctx.fillText('CAFE', 0, -10);
  ctx.restore();

  ctx.save();
  ctx.scale(-1, -1);
  ctx.font = '24px serif';
  ctx.fillText('CAFE', 10, -10);
  ctx.restore();

};

// 도형 변형(transform): 변환 행렬 사용(mdn 참조: https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Transformations#%EB%B3%80%ED%98%95transforms)
/* 
[ a c e 
  b d f
  0 0 1 ]
*/
const testTransform = ctx => {
  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);

  ctx.save();
  ctx.translate(300, -30);
  let c = 0;
  for (let i = 0; i <= 12; i++) {
    c = Math.floor(255 - (255 / 12) * i);
    ctx.fillStyle = `rgb(0, ${c*0.6}, ${c})`;
    ctx.fillRect(0, 0, 80, 15);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }
  ctx.restore();
};
