// strict mode에서만 발생하는 특수 오류

const fun1 = function () {
  'use strict';
  // 1. 선언되지 않은 변수 x
  x = 1;
  console.log(x); // ReferenceError: x is not defined
};

const fun2 = function () {
  'use strict';
  // 2. 변수, 함수 등의 삭제(delete 연산자)
  var x = 1;
  delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.
  }

  delete foo; // SyntaxError: Delete of an unqualified identifier in strict mode.

};


const fun3 = function () {
  'use strict';
  // 3. 매개변수 이름의 중복
  function foo(x, x) { // SyntaxError: Duplicate parameter name not allowed in this contex
    return x ** x;
  }

  console.log(foo(2, 3));
};

const fun4 = function () {
  'use strict';
  // 4. with 문의 사용
  // (with 문은 모던 브라우저 기준 non-strict mode에서도 권장하지 않는 구문이다.)
  with ({ x: 1 }) { // SyntaxError: Strict mode code may not include a with statement
    console.log(x);
  }
};