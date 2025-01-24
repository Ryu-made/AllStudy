// 즉시 실행 함수도 값을 반환할 수 있다.
var res1 = function () {
  var a = 3;
  var b = 5;
  return a + b;
}();

console.log(res1); // 8

// 즉시 실행 함수도 인수를 전달할 수 있다.
var res2 = function (a, b) {
  return a + b;
}(4, 7);

console.log(res2); // 11
