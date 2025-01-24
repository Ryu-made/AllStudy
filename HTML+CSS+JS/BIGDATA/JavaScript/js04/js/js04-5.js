const array = new Array(100)
  .fill(0)
  .map((v, i) => i + 1);
/* 
  filter() 문제 
  1~100 중 20~90의 짝수로 구성된 배열 생성,
  이 중 35보다 큰 수 중에서 10의 배수만 찾기
*/
const cond1 = v => v >= 20 && v <= 90 && !(v % 2);
const cond2 = v => v > 35 && !(v%10)
const result1_1 = array.filter(cond1);
console.log(result1_1);
const result1_2 = result1_1.filter(cond2);
console.log(result1_2);

/* 
  map()
  각 요소 2배
*/
const result2 = result1_2.map(v => v*2);
console.log(result2);

/*
  forEach()
  한 줄당 한 요소씩 출력
*/

const result3 = () => result2.forEach(v => console.log(v));
result3();
console.log('='.repeat(20));
const result4 = () => new Array(100).fill(0).map((v,i)=>i+1)
  .filter(cond1&&cond2).map(v=>v*2).forEach(v=>console.log(v));
result4();

document.addEventListener('DOMContentLoaded', () => {
  create();
  const tab = {
    table: document.querySelector('table'),
    tr: document.querySelectorAll('tr'),
    td: document.querySelectorAll('td')
  };
  style(tab);
});

const style = (tab) => {
  document.body.style.textAlign = 'center';
  document.body.style.minHeight = '100vh';
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
  tab.table.style.borderCollapse = 'collapse';
  tab.table.style.background = '#fffff4';
  tab.td.forEach(td => {
    td.style.border = '1px solid black';
    td.style.padding = '0.5rem 2rem';
    td.style.fontSize = '1.5rem';
  });
};

const create = () => {
  let table = document.createElement('table');
  for(value of result2) {
    let tr = document.createElement('tr');
    let tdi = document.createElement('td');
    tdi.textContent = result2.indexOf(value) + 1;
    let tdv = document.createElement('td');
    tdv.textContent = value;
    tr.append(tdi, tdv);
    table.append(tr);
  }
  document.body.append(table);
};
