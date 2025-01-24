const sym = Symbol();
const obj = {
  a: 1,
  b: 2,
  c: 3,
  [sym]: 10
};
// 프로퍼티 키가 Symbol 타입인 프로퍼티는 열거하지 않는다.
for (const prop in obj) {
  console.log(`${prop}: '${obj[prop]}'`);
}
/* 
a: '1'
b: '2'
c: '3'
*/