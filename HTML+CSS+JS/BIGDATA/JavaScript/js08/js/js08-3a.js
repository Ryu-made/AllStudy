// const file = 'temp1.csv';
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('file-csv');
  input.accept = '.csv,.txt';
  const btn = document.getElementById('uploadBtn');
  btn.addEventListener('click', () => {
    /*
    if (input.files[0].type == 'text/plain')
      input.files[0].type = 'text/csv';
    */
    console.log(input.files);
  });
});