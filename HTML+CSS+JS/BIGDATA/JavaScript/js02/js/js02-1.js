// 자리 배치도
/* 페이지 시작 */
document.write('<div id="container">');
/* 페이지 타이틀 */
document.write('<h1 id="title">KTX 자리 배치도</h1>');
/* 자리 배치도 내용 */
document.write(`<div class="content">
    <div class="selection" data-num="40">
      <p class="sub">1호차, 6호차, 8호차 - 일반실 ::<span class="seats-num">n석</span></p>
    </div>
    <div class="selection" data-num="42">
      <p class="sub">2호차 - 특실 ::<span class="seats-num">n석</span></p>
    </div>
    <div class="selection" data-num="36">
      <p class="sub">3호차 - 특실 ::<span class="seats-num">n석</span></p>
    </div>
    <div class="selection" data-num="38">
      <p class="sub">4호차 - 특실 ::<span class="seats-num">n석</span></p>
    </div>
    <div class="selection" data-num="46">
      <p class="sub">5호차 - 일반실</p>
    </div>
    <div class="selection" data-num="49">
      <p class="sub">7호차, 9호차 - 일반실</p>
    </div>
    <div class="selection" data-num="50">
      <p class="sub">10호차, 12호차, 14호차, 16호차 - 일반실</p>
    </div>
    <div class="selection" data-num="52">
      <p class="sub">11호차, 13호차, 15호차, 17호차, 18호차 - 일반실</p>
    </div>
  </div>`);  
/* 페이지 끝 */
document.write('</div>');

document.addEventListener('DOMContentLoaded', () => {
  let cells = document.querySelectorAll('.selection');
  for (const cell of cells) {
    document.addEventListener('click', select(cell));
  }
});

function select(cell) {
  let show = document.createElement('div');
  show.classList.add('seat-detail');
  let content = document.createElement('div');
  content.classList.add('seat-content');
  
  let seats = cell.data-num;
  let rows = 4;
  let cols = parseInt(seats / rows);

  content.style.display = 'flex';
  content.style.flexDirection = 'column';
  content.style.flexWrap = 'wrap';
  content.style.justifyContent = 'center';
  content.style.alignContent = 'center';
  content.style.textAlign = 'center';
  content.style.gap = '10px';
  content.style.padding = '15px';
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let unit = document.createElement('div');
      unit.classList.add('seat-unit');
      unit.append(i+1+'');
      unit.append(String.fromCharCode(j+65));
      unit.style.borderRadius = '8px';
      unit.style.backgroundColor = 'blue';
      unit.style.color = 'white';
      content.append(unit);
    }
  }

  show.appendChild(content);
  cell.appendChild(show);
}
