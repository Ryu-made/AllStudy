/* 재귀함수 */
let count = 0;

function increase(text) {
  console.log(`${text} [${++count}]`);
  setTimeout(increase('increasing'), 1000);
};

/*
setTimeout(() => {
  console.log('안녕');
}, 3000);
*/

