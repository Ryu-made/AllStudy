var x = 'global var';

// 함수의 스코프는 지역 스코프와 같다.
// 지역 변수로 선언된 x는 foo 함수 내에서 선두로 끌어올린 것처럼 여겨
// 함수가 호출되자 마자 가장 먼저 undefined 값을 할당받는다.
function foo() {
  console.log(x); // undefined
  var x = 'local var'; // 출력된 이후 문자열 값을 할당
}

foo();
console.log(x); // 'global var'