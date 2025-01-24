const person = { name: 'Kang' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다. (내가 만들지 않았으니까)
console.log(person.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/* 
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/
// 모든 객체는 Object.prototype의 접근자 프로퍼티인 __proto__를 상속받아 사용 가능하다.
console.log({}.__proto__ === Object.prototype); // true
