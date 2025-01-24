// 전역 변수 foo
let foo = 1;

// 그러나 블록 레벨 스코프 단위로 보면
// let, const 등도 모두 호이스팅이 발생하는 것을 확인할 수 있다.
{
  // 전역 변수 foo를 불러오지 않고 스코프 체인으로 지역 변수를 먼저 확인함.
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  // 지역 변수 foo
  let foo = 2;
}