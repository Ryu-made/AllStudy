// 블록문{ }의 종류
// 일반 블록문 (스코프 제한)
{
  var unit = 20;
}

// 제어문 (if, switch 등)
var unit = 120;
if (unit >= 100) {
  console.log(unit);
}

// 함수 선언문
function sum(x, y) {
  var sum = x + y;
  console.log(sum);
}