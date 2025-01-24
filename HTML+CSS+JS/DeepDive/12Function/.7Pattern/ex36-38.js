// 즉시 실행 함수를 선언문처럼 작성하면 문법 에러가 발생한다.

// function () {
//   // SyntaxError: Function statements require a function name
// } ();

function too() {
  // SyntaxError: Unexpected token ')'
} ();

(); // SyntaxError: Unexpected token ')'