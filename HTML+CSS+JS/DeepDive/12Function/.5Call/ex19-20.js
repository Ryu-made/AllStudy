// 인자개수 다르면2
function add1(x, y) {
  return x + y;
}
// 매개변수보다 인자가 많으면 넘치는 만큼 무시한다.
console.log(add1(3, 4, 6)); // 7

function add2(x, y) {
  console.log(arguments);
  return x + y;
}

var res = add2(3, 4, 6); // [Arguments] { '0': 3, '1': 4, '2': 6 }