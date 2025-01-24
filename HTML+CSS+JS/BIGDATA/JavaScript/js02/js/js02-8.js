// 문서 객체 내용
document.addEventListener('DOMContentLoaded', () => {

  for (let i = 0; i < 2; i++) {
    document.body.appendChild(document.createElement('div'));
  }
  let divs = document.querySelectorAll('div');
  divs[0].id = 'a';
  divs[1].id = 'b';
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');
  a.innerHTML = `<h1>textContent 속성</h1>`;
  b.innerHTML = `<h1>innerHTML 속성</h1>`;
  console.log(a.textContent);
  console.log(a.innerHTML);
});