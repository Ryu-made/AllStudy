
// 함수 참조
console.dir(add); // [Function: add]
console.dir(sub); // undefined

// 함수 호출
console.log(add(3, 6)); // 9
console.log(sub(3, 6)); // TypeError: sub is not a function

function add(x, y) {
  return x + y;
}

var sub = function (x, y) {
  return x - y;
}