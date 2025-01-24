const arr = new Array(100000);
console.log(arr);
const arr2 = new Array(100000).fill(0).map((v, i) => i + 1);
console.log(arr2);

console.time('> 전개연산자:');
const arr_s = [...arr2];
console.timeEnd('> 전개연산자:');
console.time('> map():');
const arr_n = arr2.map(v => v);
console.timeEnd('> map():');