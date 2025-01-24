//  접근자 프로퍼티를 통해 객체 내부 슬롯 [[Prototype]]에 간접적 접근하기 위한 방법이다.

const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
console.log(obj.__proto__); // [Object: null prototype] {}

// setter 함수인 set __proto__ 가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.x); // 1