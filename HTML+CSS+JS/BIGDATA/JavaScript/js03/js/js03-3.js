document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myChart');
  // document.querySelector('#myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['눈1', '눈2', '눈3', '눈4', '눈5', '눈6'],
      datasets: [{
        label: '주사위 던지기',
        data: cnts,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

console.time('random');
for(let i = 0; i < 10; i++) {
  const num = Math.random();
  console.log(num);
}
console.timeEnd('random');

let dice = 6; // 주사위 눈금 수
const cnts = new Array(dice);
for(let i = 0; i < dice; i++) 
  cnts[i] = 0;

let throws = prompt('주사위를 몇 번 돌리겠습니까?', 0); // 주사위를 던질 횟수
console.time(`random 1to6 - {${throws}}번 던지기`); // 연산 시간 측정

for(let i = 0; i < throws; i++) {
  const num = Math.floor(Math.random() * dice + 1);
  // console.log(num);
  cnts[num-1]++; // 횟수 기록
}

console.timeEnd(`random 1to6 - {${throws}}번 던지기`);
let total = 0;
for(let i = 0; i < dice; i++) {
  console.log(`${i+1}: ${cnts[i]}`);
  total += cnts[i];
}
console.log(cnts);
console.log(`총 횟수: ${total} / ${total == throws ? '이상 무' : '이상 있음'}`);