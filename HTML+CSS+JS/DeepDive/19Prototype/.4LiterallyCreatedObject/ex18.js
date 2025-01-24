// 지금은 ECMA 사양에 의해 정의된 Object 생성자 함수 구현이다.
// ref: https://www.ecma_international.org/ecma-262/11.0/#sec-object-value
// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 
// 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj = new Object();
console.log(obj); // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인 생성
class Foo extends Object { }
obj = new Foo();
console.log(obj); // Foo {}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체
obj = new Object(1234);
console.log(obj); // [Number: 1234]

// String 객체
obj = new Object('abc0');
console.log(obj); // [String: 'abc0']