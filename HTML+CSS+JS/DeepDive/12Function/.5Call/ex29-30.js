// return 뒤에 아무것도 없으면 undefined를 반환한다.
function bar() {
  return;
}
// return이 존재하지 않는 함수도 마찬가지이다.
function yar() {
  // 암묵적으로 undefined 반환
}

console.log(bar()); // undefined
console.log(yar()); // undefined