// 객체 리터럴에 의해 생성된 obj 객체는 추상연산에 의해
// Object.prototype을 상속받게 된다.
const obj = { x: 1 };
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x')); // true