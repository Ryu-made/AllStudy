document.addEventListener('DOMContentLoaded', () => {
  document.body.style.textAlign = 'center';
  const h1 = document.createElement('h1');
  h1.textContent = '새로운 도전!!';
  h1.style.backgroundColor = 'rgb(0, 225, 225)';
  h1.style.display = 'inline-block';
  h1.style.padding = '1rem 6rem';
  const br1 = document.createElement('br');
  const btn1 = document.createElement('button');
  btn1.textContent = '동작1';
  const btn2 = document.createElement('button');
  btn2.textContent = '동작2';
  btn1.style.fontSize = '2rem';
  btn1.style.border = 'none';
  btn1.style.background = 'lightgreen';
  btn2.style.fontSize = '2rem';
  btn2.style.border = 'none';
  btn2.style.background = 'yellowgreen';
  document.body.append(h1, br1, btn1, btn2);
  // fadeIn(h1);
  console.log(colorHeading);
  colorHeading(h1);
});

let cl = 0;
let alpha = 0;

function colorHeading(h1) {
  cl++;
  alpha += 1/255;
  console.log(cl, alpha);
  h1.style.backgroundColor = `rgb(${cl}, 225, 225)`;
  h1.style.color = `rgba(20, 20, 225, ${alpha})`;
  if (cl < 255)
    setTimeout(() => colorHeading(h1), 100); // 재귀법을 위해 콜백이 필요함
}

function fadeIn(el) {
  el.style.opacity = alpha;
  alpha -= 0.1;
  if (alpha < 1) {
    setTimeout(fadeIn(el), 1000);
  }
}

