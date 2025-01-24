// 팩토리얼: n! = 1 * 2 * .. * (n-1) * n
function factorial(n) {
  // n이 1 이하면 재귀 호출이 멈춘다. (재귀 함수는 탈출 조건이 필요하다.)
  if (n <= 1) return 1;

  // 리턴 값으로 자기 자신을 호출한 리턴 값이 연산된다.(재귀)
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(6)); // 720
console.log(factorial(10)); // 3628800