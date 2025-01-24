document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.style.fontSize = '2.5em';
  body.style.paddingLeft = '1rem';

  const h1 = document.createElement('h1');
  h1.textContent = '콘텐츠 지우기';
  const ul = document.createElement('ul');
  body.append(h1, ul);
  h1.style.fontSize = '2em';
  h1.style.marginBottom = '1rem';
  h1.style.fontWeight = 900;
  ul.style.background = 'orange';
  ul.style.width = '50%';

  for (let i = 0; i < 4; i++) {
    const li = document.createElement('li');
    li.textContent = `아이템-${i+1}`;
    li.style.font = 'serif';
    ul.append(li);
    setTimeout(() => li.remove(), 2000*(i+1));
  }
  
});