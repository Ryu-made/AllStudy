// 단축 평가로 매개변수에 기본값 할당
function addAll1(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(addAll1()); // 0
console.log(addAll1(1)); // 1
console.log(addAll1(1, 3)); // 4
console.log(addAll1(1, 3, 6)); // 10

// ES6 버전: 매개변수 기본값 사용 (코드 간소화)
function addAll2(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(addAll2()); // 0
console.log(addAll2(1)); // 1
console.log(addAll2(3, 5)); // 8
console.log(addAll2(9, 2, 4)); // 15