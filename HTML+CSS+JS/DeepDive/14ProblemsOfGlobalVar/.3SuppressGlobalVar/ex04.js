// 1. 즉시 실행 함수 선언
(function () {
  var foo = 10;
  console.log(foo + 20); // 30
}());

// 즉시 실행 함수에 선언된 변수는 한 번만 사용하고 소멸된다.
console.log(foo); // ReferenceError: foo is not defined