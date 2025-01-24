// 함수 선언문은 표현식이 아닌 문이다. (변수에 할당 X)
// 그러나 변수에 할당되는 것처럼 보일 수 있다.
var add = function add(x, y) {
  return x + y;
}

// 함수 호출(에러 X)
console.log(add(2, 4)); // 7