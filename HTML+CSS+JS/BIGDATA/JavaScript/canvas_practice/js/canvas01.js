
document.addEventListener('DOMContentLoaded',() => {
  let body = document.body;
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.alignItems = 'center';
  createCanvas();
});

const createCanvas = () => {
  // chart <canvas id="chart-box"></canvas>
  let cht = document.createElement('canvas');
  cht.id = 'chart-box';
  cht.width = 900; // width, height: 캔버스 전체 크기
  cht.height = 1100;
  cht.style.marginLeft = '2rem';
  document.body.append(cht);
  const ctx = cht.getContext('2d'); // HTMLCanvasElement.getContext: 캔버스를 그릴 객체
  
  // 1. sample
  ctx.fillStyle = 'green'; // fillStyle: 색채우기
  ctx.fillRect(20, 20, 150, 150);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 80, 80);
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  // 2. rect: 직사각형 {fill: 채우기, clear: 지우기(투명화), stroke: 선긋기}
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(40, 40, 100, 100);
  ctx.clearRect(50, 50, 50, 50);
  ctx.strokeRect(30, 10, 100, 100);
  // 3. path: 선 경로
  ctx.fillStyle = "rgb(40,200,200)";
  ctx.beginPath();
  ctx.moveTo(150, 100); // moveTo: 그림(선) 시작위치
  ctx.lineTo(300, 100); // lineTo: 선 긋기
  ctx.lineTo(225, 10);
  ctx.fill(); // fill: 속 채우기(closePath 적용)

  // 4. path+arc: 여러 도형(호) 그리기 (mdn 참조:https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#%ED%8E%9Cpen_%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0)
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle 얼굴
  ctx.fill();
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise) 입
  ctx.moveTo(65, 65); 
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye 왼쪽 눈
  ctx.fill();
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye 오른쪽 눈
  ctx.fill();
  ctx.stroke(); // stroke: 그림 채우기 이후 윤곽선 긋기

  // 5. line: 선 긋기
  ctx.beginPath();
  ctx.moveTo(150, 250);
  ctx.lineTo(150, 200);
  ctx.lineTo(90, 250);
  // ctx.closePath(); // 생략하면 불완전한 도형을 그림
  ctx.stroke(); // closePath가 없으므로 선 닫힘이 없는 도형 생성

  /*
  // 6. arc: 다양한 호 그리기
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      let x = 250 + j * 90; // x coordinate
      let y = 150 + i * 90; // y coordinate
      let radius = 40; // Arc radius
      let startAngle = 0; // Starting point on circle
      let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      let anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
  */

  // 별 모양 연습하기 (★)
  ctx.fillStyle = 'tomato';
  ctx.beginPath();
  ctx.moveTo(380, 10);
  ctx.lineTo(415, 110);
  ctx.lineTo(322, 50);
  ctx.lineTo(433, 50);
  ctx.lineTo(345, 110);
  ctx.fill();

  // 원.호 연습하기
  ctx.fillStyle = 'yellowgreen';
  ctx.beginPath();
  ctx.arc(500, 150, 50, 0, Math.PI*1.25, 0);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(610, 150, 50, Math.PI*1.5, Math.PI*1.75, 1);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(720, 150, 50, 0, Math.PI*2, 1);
  ctx.fill();
  ctx.stroke();

  // 타원형 그리기 연습
  ctx.fillStyle = 'blue';
  ctx.beginPath();
  let rx = 90, ry = 30;
  ctx.ellipse(720, 280, rx, ry, Math.PI*0.125, 0, Math.PI*2, 1);
  ctx.fill();
  // 그라데이션 추가
  ctx.fillStyle = 'rgba(0,225,225,0.0875)';
  for (let i = 1; i <= 15; i++) {
    ctx.beginPath();
    ctx.ellipse(720, 280, rx-i*6, ry-i*2, Math.PI*0.125, 0, Math.PI*2, 1);
    ctx.fill();
  }



  // 곡선 그리기 연습
  ctx.fillStyle = 'yellowgreen';
  ctx.beginPath();
  ctx.moveTo(200, 150);
  // Quadratic Curve: 이차 베지에 곡선 - control point(제어점) 1개(cpx, cpy)
  ctx.quadraticCurveTo(202, 100, 260, 150);
  ctx.quadraticCurveTo(318, 200, 320, 150);
  ctx.quadraticCurveTo(318, 100, 260, 150);
  ctx.quadraticCurveTo(202, 200, 200, 150);
  ctx.fill();
  ctx.stroke();
  
  // 파동 그리기 연습
  ctx.beginPath();
  let x = 200, y = 250;
  ctx.moveTo(x, y);
  let dis = 70;
  let reap = 6;
  for(let i = 0; i < reap; i++) {
    ctx.quadraticCurveTo(x+dis*(i+1/6), y-30, x+dis*(i+1/2), y);
    ctx.quadraticCurveTo(x+dis*(i+5/6), y+30, x+dis*(i+1), y);
  }
  // ctx.fill();
  ctx.stroke();

  // 하트 그리기 연습 (중단)
  ctx.beginPath();
  ctx.moveTo(110, 300);
  ctx.bezierCurveTo(120, 275, 160, 275, 160, 300);
  ctx.bezierCurveTo(160, 300, 120, 340, 110, 350);
  ctx.stroke();

  ctx.fillStyle = '#f44';
  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(225, 315);
  ctx.lineTo(217, 343);
  ctx.lineTo(183, 343);
  ctx.lineTo(175, 315);
  ctx.lineTo(200, 300);
  ctx.stroke();
  ctx.fill();

  // ctx.fillStyle을 색상 팔레트처럼 변화시키기 (mdn 참조:https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#fillstyle_%EC%98%88%EC%A0%9C)
  x = 270, y = 300;
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      ctx.fillStyle =
        `rgb(${Math.floor(255 - 16 * i)}
        , ${Math.floor(255 - 16 * j)}
        , 0)`;
      ctx.fillRect(x + j * 10, y + i * 10, 10, 10);
    }
  }

  // ctx.strokeStyle을 팔레트처럼 변화시키기
  let r = 15;
  x = 455, y += r;
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = `rgb(${i*25+20}, ${i*25+135}, ${i*25+60})`;
    ctx.beginPath();
    ctx.arc(x+(r*2+5)*i, y, r, 0, Math.PI*2,false);
    ctx.stroke();
  }

  // 텍스트 그리기
  // fillText
  y += 50;
  ctx.font = '16px monospace';
  ctx.fillText('Filling Text..', x, y);

  // strokeText
  y += 30;
  ctx.strokeStyle = 'black';
  ctx.font = 'bold 28px "Times New Roman", serif';
  ctx.strokeText('Stroking Text..', x, y/* , 100 */);

  // textAlign(Attr)
  const aligns = ['start', 'left', 'center', 'right', 'end'];
  ctx.font = '20px sans-serif';
  
  x += 150;
  ctx.beginPath();
  ctx.moveTo(x, y+10);
  ctx.lineTo(x, y+190);
  ctx.stroke();
  
  for (let align of aligns) {
    y += 35;
    ctx.textAlign = align;
    ctx.fillText('Align Text..', x, y);
  }

  // Path2D Object 사용하기
  let rect = new Path2D(); // 직사각형
  rect.rect(15, 375, 50, 60);
  let tri = new Path2D(); // 삼각형
  tri.moveTo(100, 375); // 기준점
  tri.lineTo(125, 425);
  tri.lineTo(75, 425);
  tri.closePath(); // 삼각형 완성하기
  let rndRect = new Path2D(); // 모서리 둥근 직사각형
  rndRect.roundRect(135, 375, 50, 50, 12);
  ctx.fillStyle = 'blueviolet'; // 채우기 색
  ctx.fill(rect); // 채우기
  ctx.strokeStyle = 'lime'; // 윤곽선 색
  ctx.stroke(tri); // 윤곽선 그리기
  ctx.strokeStyle = 'cyan';
  ctx.stroke(rndRect);

  /*
  // 텍스트 측정값 사용하기 (ctx.measureText())
  let text = ctx.measureText('Some Content');
  console.log(text); // TextMetrics 객체
  console.log(text.width); // 텍스트 길이
  console.log(text.ideographicBaseline); // 베이스 라인 위치
  */
 
}