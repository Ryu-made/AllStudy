// var 키워드로 선언된 변수는 중복 선언 허용,
// 2째줄에 선언된 foo 변수는 var 키워드가 없던 것처럼 동작한다.
var foo = 123;
var foo = 132;

// let, const 키워드로 선언된 변수는 중복 선언 허용X,
// 이미 존재한 let 변수는 같은 이름으로 다시 선언하지 못한다. (값의 재할당만 가능)
let bar = 123;
let bar = 132; // SyntaxError: Identifier 'bar' has already been declared