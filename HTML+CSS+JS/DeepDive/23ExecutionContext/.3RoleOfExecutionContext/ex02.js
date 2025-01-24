// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
  // 지역 변수 선언
  const x = 11;
  const y = 12;

  // 메소드 호출
  console.log(a + x + y); // 123
}
// 함수 호출
foo(100);
// 메소드 호출
console.log(x + y); // 3