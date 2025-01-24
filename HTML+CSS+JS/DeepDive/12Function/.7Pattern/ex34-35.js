// 즉시 실행 함수는 익명 함수든 기명 함수든 한 번만 호출된다.
console.log(
  (function () {
    var a = 3;
    var b = 5;
    return a + b;
  }())
); // 8

console.log(
  (function foo() {
    var a = 3;
    var b = 5;
    return a + b;
  }())
); // 8

foo(); // ReferenceError: foo is not defined