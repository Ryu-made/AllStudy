function add(x, y) {
  return x + y;
}

// 함수의 매개변수는 사전에 타입을 정의하지 않고 
// 호출할 때 각각 타입을 비교한다.
console.log(add(3, 4)); // 7 (숫자 연산)
console.log(add('5', 'e')); // '5e' (문자열 연결)
