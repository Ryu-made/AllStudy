document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.createElement('button');
  btn.textContent = '동작';
  const tbn1 = document.createElement('button');
  tbn1.textContent = '테스트버튼1';
  tbn1.id = 'test1';
  tbn1.classList.add('test');
  const tbn2 = document.createElement('button');
  tbn2.textContent = '테스트버튼2';
  tbn2.id = 'test2';
  tbn2.classList.add('test');
  const cbn1 = document.createElement('div');
  cbn1.textContent = '다지우기';
  cbn1.id = 'colored1';
  cbn1.classList.add('test');
  cbn1.style.background = 'orange';
  cbn1.style.width = '140px';
  cbn1.style.textAlign = 'center';
  // cbn1.style.height = '200px';
  cbn1.style.marginTop = '20px';
  cbn1.style.marginLeft = '1rem';
  const inp1 = document.createElement('input');
  inp1.type = 'text';
  inp1.id = 'test-input1';
  inp1.style.marginTop = '20px';
  document.body.append(btn, tbn1, tbn2, cbn1, inp1);
  btn.addEventListener('click', () => alert('반가워요!'));
  tbn1.addEventListener('click', () => con1(tbn1));
  tbn2.addEventListener('click', () => {
    con2(tbn2);
  });
  cbn1.addEventListener('click', () => con2(cbn1));
  // inp1.addEventListener('keypress', () => console.log(inp1.value));
  // inp1.addEventListener('keyup', () => console.log(inp1.value));
  inp1.addEventListener('keydown', () => console.log(inp1.value));

});

function con1(event) {
  console.log(event);
  console.log(event.id);
  console.log(event.classList);
}

function con2(event) {
  console.log(event);
  console.log(event.textContent);
}