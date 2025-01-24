// const items = ['Apple', 'Banana', 'Cherry', 'Kiwi', 'Melon', 'Orange'];

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.style.fontSize = '2.5em';
  body.style.padding = '0 2rem';
  body.style.background = '#fce';
  
  const title = document.createElement('h1');
  const itemlist = document.createElement('ul');
  const addListBtn = document.createElement('div');
  const input = document.createElement('input');
  document.body.append(title, input, addListBtn, itemlist);
  
  input.id = 'input';
  input.type = 'text';
  input.maxLength = 40;
  input.style.width = '550px';
  input.style.fontSize = '2rem';
  input.style.padding = '0.5rem';
  input.style.border = '1px solid #aaa';

  addListBtn.id = 'add';
  addListBtn.style.position = 'absolute';
  addListBtn.style.top = '218px';
  addListBtn.style.left = '613px';
  addListBtn.style.width = '268px';
  addListBtn.style.height = '62px';
  addListBtn.style.margin = '0.75rem';
  addListBtn.style.borderRadius = '24px';
  addListBtn.style.backgroundImage = 'url(https://img.freepik.com/free-vector/gradient-call-action-button-pack_23-2148954431.jpg)';
  addListBtn.style.backgroundPosition = '-47px 140px';
  addListBtn.style.backgroundSize = '660px';

  title.textContent = '아이템 리스트 생성';
  title.style.color = '#fffafa';
  itemlist.id = 'itemlist';

  itemlist.style.padding = '0';
  itemlist.style.listStyle = 'none';
  
  
  addListBtn.addEventListener('click', addList);
});

let checkNum = 0;
const addList = () => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `check${++checkNum}`;
  li.append(checkBox, input.value);
  itemlist.append(li);

  li.style.padding = '0.5em';
  li.style.paddingLeft = '1rem';
  li.style.marginBottom = '1.5rem';
  li.style.fontSize = '1.75rem';
  li.style.width = '800px';
  li.style.background = '#fdf';
  li.style.border = '1px solid #000a';
  checkBox.style.scale = 2.5;
  input.value = null;

  li.addEventListener('click', () => 
    checkBox.checked ? checkBox.checked = false : checkBox.checked = true
  );
};