// var 키워드로 선언한 전역 변수
var foo = 1;
// 전역 변수는 전역 객체의 프로퍼티가 되지 않는다.
console.log(global.foo); // undefined
console.log(globalThis.foo); // undefined

// 암묵적 전역이 된 변수는 전역 객체의 프로퍼티가 된다.
bar = 2; // global.bar = 2; 와 동일하다.
console.log(global.bar); // 2
console.log(globalThis.bar); // 2

// 전역 함수는 전역 객체의 프로퍼티가 되지 않는다.
function func() { return 3; }
console.log(global.func); // TypeError: global.func is not a function
console.log(globalThis.func); // TypeError: globalThis.func is not a function

// **let, const로 선언한 변수는 전역 렉시컬 환경에 따로 존재하기 때문에
// 자바스크립트 환경과 상관없이 전역 객체의 프로퍼티가 되지 않는다.
let fee = 4;
console.log(global.fee); // undefined
