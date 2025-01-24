function square(number) {
  return number * number;
}

// 브라우저 엔진에서 console.dir/.log는 함수 객체의 프로퍼티를 확인한다.
console.dir(square);
console.log(square);

// 함수 객체의 모든 프로퍼티 어트리뷰트를 확인한다.
console.log(Object.getOwnPropertyDescriptors(square));
/* 
{
  length: { value: 1, writable: false, enumerable: false, configurable: true },
  name: { value: 'square', writable: false, enumerable: false, configurable: true },
  arguments: { value: null, writable: false, enumerable: false, configurable: false },
  caller: { value: null, writable: false, enumerable: false, configurable: false },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
*/

// __proto__는 함수 객체의 프로퍼티로 포함되지 않는다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// Object.prototype 객체로부터 square 함수가 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }

