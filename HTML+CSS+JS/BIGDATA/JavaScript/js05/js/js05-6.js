document.addEventListener('DOMContentLoaded', ()=> {
  document.body.style.textAlign = 'center';
  for (let i = 0; i < 12; i++) {
    const h3 = document.createElement('h3');
    h3.textContent = 'Process..';
    document.body.append(h3);
  }
  let time = 0;
  const h3s = document.querySelectorAll('h3');
  for (const h3 of h3s) {  
    setTimeout(() => {
      h3.textContent = 'Complete!';
      h3.style.color = 'blue';
    }, time+=1000);
  }
  /*
  const h1 = document.createElement('h1');
  h1.textContent = '안녕하세요!! 이글은 5초 후 지워집니다!!!';
  document.body.append(h1);
  setTimeout(() => {
    h1.style.display = 'none';
    const p = document.createElement('p');
    p.style.color = 'red';
    p.style.fontWeight = 900;
    p.style.fontSize = '1.5rem';
    p.textContent = '인사가 사라졌습니다!';
    document.body.append(p);
  }, 5000);
  */
});
