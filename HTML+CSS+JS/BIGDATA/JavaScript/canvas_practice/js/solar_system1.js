const runhtml = () => {
  const body = document.body;
  const solar = document.getElementById('solar');
  body.style.backgroundColor = '#f2ffef';
  body.style.width = '100vw';
  body.style.margin = 0;
  body.style.textAlign = 'center';
  solar.style.backgroundColor = 'black';
};

document.addEventListener('DOMContentLoaded', runhtml);