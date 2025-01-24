var var1 = 1; // 코드의 가장 바깥 영역

if (1) {
  var var2 = 2; // 코드 블록 내에서 선언
  if (1) {
    var var3 = 3; // 중첩된 블록 내에서 선언
  }
}

function foo() {
  var var4 = 4; // 함수 내에서 선언
  function bar() {
    var var5 = 5; // 중첩 함수 내에서 선언
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined