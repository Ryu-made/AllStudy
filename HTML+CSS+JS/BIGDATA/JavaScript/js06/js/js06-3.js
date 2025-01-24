const items = ['Apple', 'Banana', 'Cherry', 'Kiwi', 'Melon', 'Orange'];

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.style.fontSize = '2.5em';
  body.style.padding = '0 2rem';
  body.style.background = '#fce';
  
  const title = document.createElement('h1');
  const itemlist = document.createElement('ul');
  document.body.append(title, itemlist);

  title.textContent = '아이템 리스트 생성';
  title.style.color = '#fffafa';
  itemlist.id = 'itemlist';

  itemlist.style.padding = '0';
  itemlist.style.listStyle = 'none';
  
  items.forEach(item => {
    const li = document.createElement('li');
    itemlist.append(li);
    li.textContent = item;
    // li.style.background = '#ebf';
    li.style.margin = '1rem 2rem';
    li.style.paddingBottom = '1rem';
    li.style.borderBottom = '4px solid #888';
    li.style.width = '200px';
    li.addEventListener('mouseover', () => {
      li.style.borderBottomColor = '#222';
    });
    li.addEventListener('mouseout', () => {
      li.style.borderBottomColor = '#888';
    });
  });
});