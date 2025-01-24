const x = 1;
function foo() {
  eval(`console.log('foo() start');`);
  eval('var x = 2; console.log(x);'); // 2
  // let, const를 사용한 변수 선언문은 자동으로 strict mode가 적용된다.
  eval('const x = 3; console.log(x);'); // 3
  console.log(x); // 2
  eval(`console.log('foo() end');`);
}

foo();
console.log(x); // 1