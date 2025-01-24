// 배열 만들기
const arr1 = ['강아지', '고양이', '코끼리', '원숭이', '호랑이'];
console.log(arr1);

let i = 0;
for (const el of arr1) {
  console.log(i++, el);
}

console.log('배열 거꾸로');

i = arr1.length;
arr1.reverse();
for(const el of arr1) {
  console.log(--i, el);
}

// arr1.length = 0;
// console.log(arr1);

let arr3 = arr1.copyWithin();
arr3 = ['사탕', '하나만'];
console.log(arr3);