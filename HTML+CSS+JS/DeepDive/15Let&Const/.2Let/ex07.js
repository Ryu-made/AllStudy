// ES6에서 도입된 let, const는 호이스팅이 발생하지 않는 것처럼 동작한다.
console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo;