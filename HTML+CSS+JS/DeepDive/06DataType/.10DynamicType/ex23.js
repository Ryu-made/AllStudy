// 동적 타입 언어인 자바스크립트는 한 변수에 다양한 타입의 값을 (재)할당할 수 있다.
// 동적 타입 언어 종류: JS, Python(파이썬), Ruby(루비), PHP, Lisp(리스프), Perl(펄) 등
var foo;
console.log(typeof foo); // undefined
foo = 3;
console.log(typeof foo); // 3
foo = 'Ryu';
console.log(typeof foo); // Ryu
foo = 'a' < 'b';
console.log(typeof foo); // boolean
foo = null;
console.log(typeof foo); // object
foo = Symbol(5); // 심볼
console.log(typeof foo); // symbol
foo = {}; // 객체
console.log(typeof foo); // object
foo = []; // 배열
console.log(typeof foo); // object
foo = function () { };
console.log(typeof foo); // function