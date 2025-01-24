// strict mode의 잠재적 역설
(function () {
  // non-strict mode
  var let = 100; // 에러 X
  console.log(let);

  // 함수 레벨 스코프
  function foo() {
    'use strict';
    let = 200; // SyntaxError: Unexpected strict mode reserved word
    console.log(let);
  }
  foo();
}());