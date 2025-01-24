const now = dayjs();
const ms = now.get('ms');
let div = document.createElement('div');
div.style.backgroundImage = 'url(https://t1.daumcdn.net/cfile/tistory/13045F404D7C365D23)';
div.style.width = '138px';
div.style.height = '154px';

const random = ms % 3;
switch (random) {
  case 0:
    div.classList.add('muk');
    break;
    
  case 1:
    div.classList.add('zzi');
    div.style.backgroundPositionX = '-138px';
    break;
  
  case 2:
    div.classList.add('bba');
    div.style.backgroundPositionX = '-276px';
    div.style.width = '160px';
    break;
}

document.body.append(div);
