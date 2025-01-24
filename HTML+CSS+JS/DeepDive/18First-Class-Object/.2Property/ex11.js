// .4 name 프로퍼티
// ES6부터 ECMA의 표준 프로퍼티가 되었다.
// 이전 버전과의 차이점은 익명 함수 표현식에 대한 프로퍼티 값이다.

// 기명 함수 표현식
const namedFunc = function foo() { };
console.log(namedFunc.name); // foo (함수 이름)

// 익명 함수 표현식
const unamedFunc = function () { };
console.log(unamedFunc.name); // unamedFunc (식별자 이름)

// 함수 선언문
function bar() { }
console.log(bar.name); // bar