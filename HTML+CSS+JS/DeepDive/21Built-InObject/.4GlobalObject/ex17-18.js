const x = 1;

function foo() {
  // eval 함수는 기존의 스코프를 '런타임에 동적으로 수정'한다.
  eval('var x = 2;');
  console.log(x); // 2
}

foo();
console.log(x); // 1

const y = 3;

function bar() {
  'use strict';
  // strict mode에서 eval 함수는 자체적인 스코프를 생성하여 호출된다.
  eval('var y = 4; console.log(y);'); // 4
  console.log(y); // 3
}

bar();
console.log(y); // 3