// 전역 객체는 '변수'가 아니라 그 자체가 객체이므로
// 자바스크립트 엔진에서 어떤 객체보다도 가장 먼저 생성되고 언제든지 사용 가능하다.

// 브라우저 환경에서는 window, self, this 등의 이름을,
// Node.js 환경에서는 global 이름으로 전역 객체를 사용할 수 있다.

// 대신 ES11 부터 도입된 globalThis 객체는 모든 환경에 적용 가능한 ECMA 표준 사양 객체이다.

// ECMA 사양을 따르는 모든 브라우저 환경:
// console.log(globalThis === this); // true
// console.log(globalThis === window); // true
// console.log(globalThis === self); // true
// console.log(globalThis === frames); // true

// Node.js 환경(현재는 v23.3.0, 최소 v12.0.0):
console.log(globalThis === this); // false (왜 false가 될까)
console.log(globalThis === global); // true
console.log(this, globalThis);
// (2024.12.25)지금 다시 보니 this 라는 객체는 명시적 전역에는 포함되지 않는 듯하다. 
