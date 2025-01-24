// 기명 함수의 표현식이다.
var multi = function bar(x, y) {
  return x * y;
}

// 함수 객체를 할당한 변수 이름(식별자)으로 호출한다.
console.log(multi(4, 7)); // 28
// 함수 이름은 외부에서 직접 호출하지 못한다.
console.log(bar(4, 7)); // ReferenceError: bar is not defined