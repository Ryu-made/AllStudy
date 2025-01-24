const arr = ['강아지', '고양이', '코끼리', '원숭이', '호랑이', '거북이', '토끼', '여우'];
for (const i in arr) {
  console.log('for in:', i, arr[i]);
}
console.log('==속성(key) 추가==');
arr.key1 = '나는야 슈퍼맨';
arr.key2 = '나는야 토마토';
arr.key3 = '나는야 파이썬';
for (const i in arr) {
  console.log('for in:', i, arr[i]);
}
console.log('================');
for (const e of arr) {
  console.log('for of:', e);
}

