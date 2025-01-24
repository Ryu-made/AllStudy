// ES6 이후
const prefix = 'pre';
let i = 0;
// object 생성 시에 계산된 키로 프로퍼티 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // { 'pre-1': 1, 'pre-2': 2, 'pre-3': 3 }