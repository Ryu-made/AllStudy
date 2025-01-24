// 함수 응용
const forH1 = text => `<h1>${text}</h1>`; // 호이스팅 불가
/*
function forH1(text) { // 호이스팅 가능(주의)
  return `<h1>${text}</h1>`;
}
*/

document.addEventListener('DOMContentLoaded', ()=>{
  let cnt = 0;
  do {
    let getText = prompt(`제목을 입력해주세요.[${++cnt}]`);
    if (!getText) break;
    document.body.innerHTML += forH1(getText);
  } while (1);
  const lastHeader = document.querySelector('h1:last-child');
  console.log(lastHeader);
  if (lastHeader) { // header(h1)가 존재할 때만 실행
    // const next = document.body.appendChild(document.createElement('h1'));
    document.body.append(forH1('여기는 마지막 헤더임.'));
    console.log(document.body.textContent); // 모든 텍스트 (innerHTML에 비해 안전)
    console.log(document.body.innerText); // 페이지에 보이는 텍스트 (제한적 출력)
    cnt = 0;
    document.querySelectorAll('h1').forEach((e)=>{
      e.style.backgroundColor = prompt(`헤더의 배경색을 입혀주세요.[${++cnt}]`);
      console.log(e.style.backgroundColor);
      e.style.color = 'white';
      if (!e.style.backgroundColor || e.style.backgroundColor == 'white')
        e.style.backgroundColor = 'black';
    });
  }
});
