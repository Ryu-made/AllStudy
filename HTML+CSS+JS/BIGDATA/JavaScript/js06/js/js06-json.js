const url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url + 'posts').then(res => res.json()).then(json => console.log('title:', json[0].title));
const getData = ops => {
  const select = document.createElement('select');
  document.body.append(select);
  select.id = 'title';

  const titleBox = select.appendChild(document.createElement('option'));
  titleBox.append('제목을 선택하세요.');
  titleBox.disabled = true;

  const content = document.body.appendChild(document.createElement('div'));
  
  content.className = 'content';

  ops.forEach((op, i) => {
    const option = select.appendChild(document.createElement('option'));
    option.append(`${i+1} : ${op.title}`);
  });

  select.addEventListener('change', e => content.textContent = ops[e.target.selectedIndex].body);

};

fetch(url).then(res => res.json()).then(getData);
/*
const testData = {
  name: '대현',
  age: 25,
  gender: 'male'
};
*/