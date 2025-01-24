// '접근자 프로퍼티'와 '데이터 프로퍼티'를 구별하는 방법

// 일반 객체의 __proto__
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/* 
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/

// 함수 객체의 prototype
console.log(Object.getOwnPropertyDescriptor(function () { }, 'prototype'));
// { value: {}, writable: true, enumerable: false, configurable: false }