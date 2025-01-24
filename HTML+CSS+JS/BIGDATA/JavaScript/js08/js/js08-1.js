const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB-min.json';
fetch(url).then(res => res.json()).then(getData);

function getData(json) {
  const container = document.body.appendChild(document.createElement('div'));
  container.className = 'container';
  const select = container.appendChild(document.createElement('select'));
  select.className = 'select-name';
  const input = select.appendChild(document.createElement('option'));
  input.append('::이름::');
  input.disabled = true;
  input.id = 'pls-select';
  const appendDiv = () => container.appendChild(document.createElement('div')); 
  const language = appendDiv();
  const id = appendDiv();
  const bio = appendDiv();
  const version = appendDiv();
  language.className = id.className = bio.className = version.className = 'text';

  json.forEach((e, i) => {
    const name = select.appendChild(document.createElement('option'));
    name.append(e.name);
  });
  
  select.addEventListener('change', e => {
    const i = json[e.target.selectedIndex];
    language.textContent = i.language;
    id.textContent = i.id;
    bio.textContent = `${i.bio.slice(0, 30)}...`;
    version.textContent = i.version;
    document.querySelectorAll('.text')
      .forEach(e => e.style.backgroundColor = i.version > 3 ? 'palegreen' : 'skyblue');
    
    // console.log(select.selectedOptions.namedItem('pls-select'));
  });




}