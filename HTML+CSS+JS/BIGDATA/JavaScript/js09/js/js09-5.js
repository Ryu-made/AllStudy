document.addEventListener('DOMContentLoaded', () => {
  /*
  localStorage.setItem();
  localStorage.getItem();
  */
  const in1 = qs('#in1');
  const in2 = qs('#in2');
  const in3 = qs('#in3');
  const btnSave = qs('#save');
  const btnLoad = qs('#load');
  const btnDelete = qs('#del');
  const p = document.body.appendChild(document.createElement('pre'));
  p.style.fontSize = '2rem';

  let curCount = 0;

  btnSave.addEventListener('click', () => {
    const ori = { name: in1.value, age: in2.value, address: in3.value };
    console.log(ori);
    localStorage.setItem(curCount, JSON.stringify(ori));
    console.log(localStorage.getItem(curCount), localStorage.length);
    curCount++;
  });

  btnLoad.addEventListener('click', () => {
    const item = JSON.parse(localStorage.getItem(curCount - 1));
    p.textContent = `
  name: ${item.name}
  age: ${item.age}
  address: ${item.address}
    `;
  });

  btnDelete.addEventListener('click', () => {
    localStorage.clear();
    p.textContent = null;
  });
});

const qs = (s) => document.querySelector(s);