// 인자개수 다르면1
function add(x, y) {
  return x + y;
}
// 함수에 전달할 인수가 부족하면 나머지는 undefined로 전달된다.
console.log(add(2)); // 2 + undefined = NaN