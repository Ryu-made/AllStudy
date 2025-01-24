// 에러가 발생하지 않는 변화
(function () {
  // 1. 일반 함수 내부의 this 키워드는 undefined를 반환한다.
  'use strict';
  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo {}
  }
  new Foo();
}());