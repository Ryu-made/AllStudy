// .3 length 프로퍼티
// length: 함수를 정의할 때 선언한 매개변수의 개수
function foo() { }
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function sor(x, y) {
  return [x, y];
}
console.log(sor.length); // 2