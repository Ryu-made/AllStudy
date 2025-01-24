// .1 일반 함수 호출
function foo() {
  console.log(`foo's this: ${this}`); // foo's this: [object global]
  function bar() {
    console.log(`bar's this: ${this}`); // bar's this: [object global]
  }
  bar();
}
foo();

// strict mode 사용
function roo() {
  'use strict';

  console.log(`roo's this: ${this}`); // undefined
  function zar() {
    console.log(`zar's this: ${this}`); // undefined
  }
  zar();
}
roo();