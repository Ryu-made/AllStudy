// 전역 코드의 실행 컨텍스트 등록: 변수 x, 함수 foo
const x = 1; // 실행: 변수 x에 값을 할당

function foo() {
  // foo 함수 코드의 실행 컨텍스트 등록: 변수 y, 중첩 함수 bar
  const y = 2; // 실행: 변수 y에 값을 할당
  function bar() {
    // bar 함수 코드의 실행 컨텍스트 등록: 변수 z
    const z = 3; // 실행: 변수 z에 값을 할당
    // 실행: console.log 메소드 호출
    console.log(x + y + z);
  }
  // 실행: 함수 bar를 호출
  bar();
}
// 실행: 함수 foo를 호출
foo(); // 6