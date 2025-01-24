/* 
  다른 함수의 매개변수로 전달되는 함수는 콜백 함수(callback function),
  함수의 외부에서 콜백 함수를 전달받는 함수는 고차 함수(Higher-Order Function)라고 부른다.
*/

// 외부에서 전달받은 함수 f를 n번만큼 반복 호출
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // f를 호출할 때 i를 인수로 전달한다.
  }
}


var log = function (i) {
  console.log(i);
}

var logOdds = function (i) {
  if (i % 2) console.log(i);
}

var logEvens = function (i) {
  if (!(i % 2)) console.log(i);
}

repeat(7, logOdds); // 1 3 5
repeat(7, logEvens); // 0 2 4 6