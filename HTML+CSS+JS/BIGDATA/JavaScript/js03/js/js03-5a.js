// 로또 엔진 만들기
const end = 45;
let prior = 6;

document.addEventListener('DOMContentLoaded', () => {
  const results = // play();
  [
    [
        45,
        13520
    ],
    [
        10,
        13516
    ],
    [
        18,
        13504
    ],
    [
        6,
        13500
    ],
    [
        26,
        13489
    ],
    [
        8,
        13458
    ],
    [
        13,
        13432
    ],
    [
        31,
        13414
    ],
    [
        14,
        13409
    ],
    [
        30,
        13408
    ],
    [
        17,
        13405
    ],
    [
        32,
        13385
    ],
    [
        3,
        13381
    ],
    [
        43,
        13377
    ],
    [
        27,
        13370
    ],
    [
        12,
        13365
    ],
    [
        29,
        13364
    ],
    [
        23,
        13360
    ],
    [
        11,
        13359
    ],
    [
        5,
        13349
    ],
    [
        40,
        13346
    ],
    [
        16,
        13339
    ],
    [
        38,
        13335
    ],
    [
        24,
        13334
    ],
    [
        21,
        13317
    ],
    [
        9,
        13310
    ],
    [
        34,
        13309
    ],
    [
        7,
        13305
    ],
    [
        19,
        13303
    ],
    [
        1,
        13296
    ],
    [
        2,
        13295
    ],
    [
        39,
        13295
    ],
    [
        41,
        13293
    ],
    [
        36,
        13278
    ],
    [
        28,
        13263
    ],
    [
        25,
        13256
    ],
    [
        20,
        13253
    ],
    [
        22,
        13237
    ],
    [
        35,
        13228
    ],
    [
        33,
        13217
    ],
    [
        4,
        13203
    ],
    [
        15,
        13193
    ],
    [
        37,
        13153
    ],
    [
        44,
        13141
    ],
    [
        42,
        13136
    ]
];
  console.log(results);
  
  createElTable();
  createElChart();
  const body = document.body;
  const table = {
    box: document.querySelectorAll('.table-box'),
    div: document.querySelectorAll('.table-box div')
  };

  const lineChart = {

  };

  styleBody(body, table, lineChart);
  
  let list = document.querySelectorAll('.table-list');
  let value = document.querySelectorAll('.table-value');
  let n = 0;
  for (const result of results) {
    list[n].textContent = result[0];
    value[n].textContent = result[1];
    n++;
  }
  
});

const styleBody = (body, table, lineChart) => {
  body.style.width = '100%';
  body.style.minHeight = '100vh';
  body.style.padding = '1.5% 2%';

  table.box.forEach(box => {
    box.style.width = '240px';
    box.style.float = 'left';
    box.style.display = 'grid';
    box.style.gridTemplateColumns = '1fr 3fr';
    box.style.justifyContent = 'center';
    box.style.alignContent = 'center';
  });

  table.div.forEach(div => {
    div.style.padding = '0.5rem';
    div.style.textAlign = 'center';
    div.style.background = 'snow';
    div.style.borderBottom = '1px solid black';
  });
}
// HTML 요소 생성하기
const createElChart = () => {
  // chart <canvas id="chart-box"></canvas>
  let cht = document.createElement('canvas');
  cht.id = 'chart-box';
  cht.width = 900; // width, height: 캔버스 전체 크기
  cht.height = 1400;
  cht.style.marginLeft = '2rem';
  cht.style.border = '1px solid black'; // 임시 윤곽선
  document.body.append(cht);
  const ctx = cht.getContext('2d'); // HTMLCanvasElement.getContext: 캔버스를 그릴 객체

}

const createElTable = () => {
  // table
  let con = document.createElement('div');
  con.classList.add('table-box');
  for (let i = 0; i < end; i++) {
    let list = document.createElement('div');
    list.classList.add('table-list');
    let value = document.createElement('div');
    value.classList.add('table-value');
    con.append(list, value);
  }
  document.body.append(con);

}

// 로또 번호 테스트
const play = () => {  
  console.time('> lotto-time');
  const logs = new Map();
  for (let i = 0; i < end; i++)
    logs.set(i+1, 0);
  
  const count = 100000; // prompt('몇 회 반복할지 입력하세요.', 0);
  const lottoNums = 6;
  for (let i = 0; i < count; i++) {
    const nums = new Set();
    while (nums.size < lottoNums) {
      const lotto = Math.floor(Math.random() * 45 + 1);
      nums.add(lotto);
    }

    for (n of nums)
      logs.set(n, logs.get(n)+1);
    
  }
  console.log(logs);
  console.timeEnd('> lotto-time');
  
  const array = new Array();
  let total = 0;
  for (const entry of logs) {
    array.push(entry);
    total += entry[1];
  }
  console.log(`> 총 횟수 검증: ${count*lottoNums == total ? '이상 무' : '이상 있음'} {total: ${total}}`);
  array.sort((a, b) => b[1] - a[1]);
  return array;
}

/*
let lbls = new Array();
for(let i = 0; i < end; i++) {
  lbls.push(i+1+'');
}

const chartl = (result) => {
  new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: lbls,
      datasets: [{
        label: '#',
        data: result,
        borderWidth: 0
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
}
*/

