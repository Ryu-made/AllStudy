// **이 예제는 브라우저 환경에서 실행해야 한다.

// 전역 변수 객체 활용하기
// 선언된 전역 변수
var x = 1;
// 암묵적 전역 변수
y = 2;

// 전역 함수
function foo() { }

// var 키워드로 선언한 전역 변수: 전역 객체의 프로퍼티
console.log(window.x); // 1
// 전역 객체의 프로퍼티는 전역 변수처럼 사용 가능
console.log(x); // 1

// 암묵적 전역 변수: 전역 객체의 프로퍼티
console.log(window.y); // 2
console.log(y); // 2

// 함수 선언문으로 정의한 전역 함수: 전역 객체의 프로퍼티
console.log(window.foo); // f foo() {}
console.log(foo); // f foo() {}


let z = 3;

// let, const 키워드로 선언한 전역 변수는 전역 객체(window)의 프로퍼티가 아니다.
console.log(window.z); // undefined
console.log(z); // 3
