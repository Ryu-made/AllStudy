// 1. 일반 함수(constructor 함수) 정의 3가지
function foo() { }
const bar = function () { };
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
  x: function () { }
}

// 일반 함수로 정의된 함수만이 constructor다.
console.log(new foo()); // foo {}
console.log(new bar()); // bar {}
console.log(new baz.x()); // x {}

// 2. non-constructor 함수
// 화살표 함수 정의
const arrow = () => { };
console.log(new arrow()); // TypeError: arrow is not a constructor

// 메소드 정의: ES6 이후 메소드 축약 표현만 메소드로 인정한다.
const obj = {
  x() { }
};
console.log(new obj.x()); // TypeError: obj.x is not a constructor