// for-loop 연산속도 측정하기
const originTIme = 10000000; // 10,000,000
const arr = new Array(); // 배열 준비
// console.time('for-10000000');
for (let i = 0; i < originTIme; i++) arr.push(i); // 0 ~ 9,999,999 추가
// console.timeEnd('for-10000000');

console.time('let;for-10000000');
for (let i = 0; i < originTIme; i++) {}
console.timeEnd('let;for-10000000');

console.time('let;for-length-start');
for (let i = 0; i < arr.length; i++) {}
console.timeEnd('let;for-length-start');

console.time('let;for-length-end');
for (let i = arr.length; i > 0; i--) {}
console.timeEnd('let;for-length-end');

console.time('var;for-10000000');
for (var i = 0; i < originTIme; i++) {}
console.timeEnd('var;for-10000000');

console.time('var;for-length-start');
for (var i = 0; i < arr.length; i++) {}
console.timeEnd('var;for-length-start');

console.time('var;for-length-end');
for (var i = arr.length; i > 0; i--) {}
console.timeEnd('var;for-length-end');

console.time('forEach + =>');
arr.forEach(function (v, i) {});
console.timeEnd('forEach + =>');

console.time('forEach + =>');
arr.forEach((v, i) => {});
console.timeEnd('forEach + =>');

console.time('for-of');
for (const v of arr) {}
console.timeEnd('for-of');

console.time('for-in');
for (const i in arr) {}
console.timeEnd('for-in');

console.time('console-array[10000000]');
console.log(arr);
console.timeEnd('console-array[10000000]');

