// const inp = prompt('몇 단을 출력할지 입력하세요.');
let title = `<div class="title">구구단</div>`; // 타이틀
document.write(title);
let start = `<div class="container">`; // 구구단 시작
document.write(start);
let list = '';
for (let h = 2; h < 10; h++) {
  list += `<div class="table">
      <div class="sub">${h}단</div>`;
  for (let i = 1; i < 10; i++) {
    list += `<div class="statement">${h} &cross; ${i}</div><div class="result">${h * i}</div>`;
  }
  list += `</div>`;
}
document.write(list);

let end = `</div>`; // 구구단 끝
document.write(end);
