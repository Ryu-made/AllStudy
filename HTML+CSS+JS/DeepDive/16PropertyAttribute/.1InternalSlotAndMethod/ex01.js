const o = {};
// 내부 슬롯은 자바스크립트의 내부 로직이다. (직접 접근 X)
o.[[Prototype]]; // SyntaxError: Unexpected token '['
// 대신에 일부 슬롯은 간접 접근 가능한 수단을 제공한다.
console.log(o.__proto__); // [Object: null prototype] {}
