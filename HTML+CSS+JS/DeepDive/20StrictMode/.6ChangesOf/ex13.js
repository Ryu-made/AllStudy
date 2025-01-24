(function (a) {
  // 2. 매개변수에 전달된 인수를 재할당해서 변경해도 arguments 객체에는 반영되지 않는다.
  'use strict';
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2; // 변경된 값 2

  // 변경된 인수가 arguments 객체에 반영되지 않고 전달된 시점의 값이 반영된다.
  console.log(arguments); // { 0: 1 }
  console.log(`length: ${arguments.length}`); // length: 1
}(1)); // 처음 전달된 값 1