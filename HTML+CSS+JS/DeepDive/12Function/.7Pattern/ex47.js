// 팩토리얼 함수 반복문으로 구현하기
function factorial(n) {
  if (n <= 1) return 1;

  var res = n;
  // --n이 0이 될 때까지 반복
  while (--n) res *= n;
  return res;
}


console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(6)); // 720
console.log(factorial(10)); // 3628800