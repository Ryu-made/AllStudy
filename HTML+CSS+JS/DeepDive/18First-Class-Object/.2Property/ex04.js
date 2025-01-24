// .1 arguments 프로퍼티
function multiply(x, y) {
  console.log(arguments); // [Arguments] {'0': 1, .. }
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 3
console.log(multiply(1, 2, 4)); // 3