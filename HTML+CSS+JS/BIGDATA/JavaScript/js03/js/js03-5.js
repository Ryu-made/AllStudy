// 로또 엔진 만들기
let end = 45;

document.addEventListener('DOMContentLoaded', () => {
  const result = play();
  console.log(result);
  chartl(result);
  /*
  let con = document.createElement('div');
  con.id = 'container';
  for(let i = 0; i < end; i++) {
    let list = document.createElement('div');
    list.classList.add('list');
    let value = document.createElement('div');
    value.classList.add('value');
    con.append(list, value);
  }
  document.body.append(con);

  document.body.style.width = '100wv';
  document.body.style.minHeight = '100wh';
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  let container = document.getElementById('container');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = '1fr 2fr';
  container.style.justifyContent = 'center';
  container.style.alignContent = 'center';
  let div = document.querySelectorAll('#container div');
  div.forEach(d => {
    d.style.padding = '0.5rem';
    d.style.textAlign = 'center';
    d.style.background = 'snow';
    d.style.borderBottom = '1px solid black';
  });
  
  let list = document.querySelectorAll('.list');
  let value = document.querySelectorAll('.value');
  list.forEach((e, i) => {
    e.textContent = i+1;
  });
  value.forEach((v, i) => {
    v.textContent = result[i];
  });
  */
});

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

const play = () => {  
  console.time('lotto-time');
  const logs = new Array(end);
  for (let i = 0; i < end; i++)
    logs[i] = 0;
  
  const count = prompt('몇 회 반복할지 입력하세요.', 0);
  for (let i = 0; i < count; i++) {
    const nums = new Set();
    while (nums.size < 6) {
      const lotto = Math.floor(Math.random() * 45 + 1);
      nums.add(lotto);
    }
    // console.log(nums);
    for(n of nums)
      logs[n-1]++;
  }
  console.timeEnd('lotto-time');
  return logs;
}

let lbls = new Array();
for(let i = 0; i < end; i++) {
  lbls.push(i+1+'');
}

