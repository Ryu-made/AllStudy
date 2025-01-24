// 암묵적 전역은 전역 변수처럼 동작하지만
// 전역 객체의 프로퍼티일 뿐이므로 호이스팅이 발생하지 않는다.

// 전역 변수 x는 호이스팅이 발생한다.
console.log(x); // undefined
// 전역 객체의 프로퍼티 y는 호이스팅이 발생하지 않는다.
// console.log(y); // ReferenceError: y is not defined

var x = 10;

function foo() {
  y = 20;
}
foo();

// var 변수 x는 Nodejs 환경에서 전역 객체의 프로퍼티가 되지 않는다.
console.log(global.x, x); // undefined 10
// 전역 객체의 프로퍼티인 식별자 y는 값을 할당한 이후에 언제든 참조할 수 있다.
console.log(global.y, y); // 20 20
console.log(x + y); // 30

// 전역 객체의 프로퍼티로써 삭제
delete x;
delete y;

// 삭제 여부
console.log(x); // 10 - 삭제 불가
console.log(global.y); // undefined - 삭제 가능
console.log(y); // ReferenceError: y is not defined