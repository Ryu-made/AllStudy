// 지역 변수의 생명 주기
// 함수 내에 선언한 변수는 함수를 호출하기 전까지는 생성하지 못하므로
// 전역 변수처럼 외부에서 사용하지 못한다.
function foo() {
  // 지역 변수 x 생성
  var x = 'local var';
  console.log(x); // 'local var'
  return x;
  // 반환 이후 변수 x는 함수 foo의 스코프와 함께 소멸
}

// 변수 r에 foo 함수의 반환값으로 문자열을 저장한다.
var r = foo();
console.log(r); // 'local var'

// 변수 x는 전역 스코프에 아직 선언한 적이 없으므로 에러가 발생한다.
console.log(x); // ReferenceError: x is not defined