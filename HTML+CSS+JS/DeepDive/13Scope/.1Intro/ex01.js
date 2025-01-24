function add(x, y) {
  // 매개변수의 유효범위(스코프)는 함수 몸체 내부이다.
  console.log(x, y);
  return x + y;
}

add(2, 5); // 2 5
// 함수 내부에만 사용되는 매개변수는 외부에서 참조하지 못한다.
console.log(x, y); // ReferenceError: x is not defined