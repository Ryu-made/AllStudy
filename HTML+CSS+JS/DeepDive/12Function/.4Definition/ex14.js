// 클로저(?) 함수로 동작하기
var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  }
}());

console.log(add1(4, 3)); // 17

// Function 생성자 함수는 클로저를 생성하지 않는다.
var add2 = (function () {
  var a = 10;
  return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(5, 6)); // ReferenceError: a is not defined