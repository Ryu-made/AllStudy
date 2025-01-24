document.addEventListener('DOMContentLoaded', () => {
  const arrDiv = new Array();
  for (let i = 0; i < 53; i++) {
    const div = document.createElement('div');
    document.body.append(div);
    arrDiv.push(div);
  }

  arrDiv.forEach((div, idx) => {
    const r = idx * 2 + 45, g = Math.floor(idx * 4.5), b = idx + 150;
    div.style.height = '25px';
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }); 
})