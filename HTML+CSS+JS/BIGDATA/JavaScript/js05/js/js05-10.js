document.addEventListener('DOMContentLoaded', ()=>{
  const bodystyle = document.body.style;
  bodystyle.fontSize = '2.5rem';
  const textArea = document.querySelector('textarea');
  textArea.style.fontFamily = 'serif';
  textArea.style.padding = '0.5rem';
  textArea.maxLength = 20;
  const count = document.querySelector('#count');
  document.addEventListener('keypress', () => updateText(textArea, count));
});

function updateText(textArea, count) {
  count.textContent = textArea.value.length;
}