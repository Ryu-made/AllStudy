document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.style.fontSize = '2em';
  body.style.textAlign = 'center';
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const h1 = document.createElement('h1');
  const h1_span = document.createElement('span');
  div.innerHTML = '<h1>첫 번째 div</h1>';
  div2.innerHTML = '<h1>두 번째 div</h1>';
  h1_span.textContent = '내부 h1';
  h1.append(h1_span);
  h1_span.style.fontFamily = 'monospace';
  h1_span.style.backgroundColor = 'yellow';
  h1_span.style.padding = '8px';

  body.append(div, div2);

  const onDiv = (div, div2) => {
    div.append(h1);
    setTimeout(() => onDiv(div2, div), 800);
  };
  onDiv(div, div2);
});
