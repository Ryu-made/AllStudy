// this 참조 변수 호출 방식
// 1. 일반적인 함수에서 호출
function foo() {
  // 함수에서 this는 전역 객체이다.
  console.log(this);
}
// 전역 객체 this는 브라우저 환경에서는 window, Node.js에서는 global을 가리킨다.
foo(); // window | global

const obj = { foo }; // ES6 버전의 프로퍼티 축약 표현 ({ foo: foo() {...} })

// 객체 내부 메소드로 호출
obj.foo(); // { foo: [Function: foo] }

// 생성자 함수로 호출
const inst = new foo(); // foo {}
