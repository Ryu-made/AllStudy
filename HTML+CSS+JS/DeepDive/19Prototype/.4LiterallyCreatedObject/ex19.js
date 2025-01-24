// foo 함수는 Function 생성자 함수가 아닌 함수 선언문으로 생성했다.
function foo() { }
// 하지만 constructor 프로퍼티가 가리키는 생성자 함수는 동일하게 Function이다.
console.log(foo.constructor === Function); // true