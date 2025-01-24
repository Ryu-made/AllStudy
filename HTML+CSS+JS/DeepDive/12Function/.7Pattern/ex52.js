function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
// 익명 함수 리터럴을 콜백 함수로 전달한다.
// 그러면 고차 함수를 호출할 때마다 새로운 함수 객체를 생성한다.
repeat(6, function (i) {
  if (i % 2) console.log(i);
}); // 1 3 5

// 그러나 콜백 함수를 다른 함수에도 호출할 가능성이 있거나,
// 고차 함수가 자주 호출된다면 외부에 콜백 함수를 정의하는 편이 좋다.

var logOdds = function (i) {
  if (i % 2) console.log(i);
}
// 고차 함수에 함수 참조를 전달한다.
repeat(6, logOdds); // 1 3 5