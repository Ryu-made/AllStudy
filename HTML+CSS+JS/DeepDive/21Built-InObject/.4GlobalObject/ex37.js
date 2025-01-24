// .3 암묵적 전역
var x = 10; // 전역 변수

function foo() {
  // 선언하지 않고 값을 할당
  // 암묵적 전역 = 전역 객체(window|global)의 프로퍼티
  y = 20; // global.y = 20;
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(global.y); // 20
console.log(x + y); // 30