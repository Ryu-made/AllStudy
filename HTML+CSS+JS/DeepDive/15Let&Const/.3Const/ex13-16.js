// const 키워드 규칙
// 1. 변수 선언과 동시에 초기화해야 한다.
const foo = 1;
// 초기화하지 않은 const 변수는 문법적 에러가 발생한다. 
const bar; // SyntaxError: Missing initializer in const declaration

// 2. let 변수와 같이 블록 레벨 스코프를 가진다.
// (변수 호이스팅이 발생하지 않는 것처럼 동작)

{
  console.log(soo); // ReferenceError: Cannot access 'soo' before initialization
  const soo = 1;
  console.log(soo); // 1
}

console.log(soo); // ReferenceError: soo is not defined

// 3. 재할당 금지
// 이 규칙은 let 변수와 가장 다른 점이다.
const yar = 1;
yar = 2; // TypeError: Assignment to constant variable.

