document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('#title');
  const p = document.querySelector('p');
  const btn = document.querySelectorAll('button');

  btn[0].addEventListener('click', () => {
    p.innerHTML = h1.style.cssText;
  });
  btn[1].addEventListener('click', () => {
    h1.style.cssText = h1.style.cssText == css[0] ? css[1] : css[0];
  });
});

const css = [
  `color: palegreen; font-size: 2rem; text-decoration: overline;`
  , `padding: 1rem; font-weight: bold; color: red; text-align: end;`
];
