// .2 caller 프로퍼티
// caller: ECMA 사양에 포함되지 않는 비표준 프로퍼티. (그냥 알고 넘어가기)
// 함수 객체에 대해 자신을 호출한 함수를 가리킨다.
function foo(call) {
  return call();
}

function bar() {
  return 'caller: ' + bar.caller;
}

// 브라우저에서의 실행한 결과
console.log(foo(bar)); // caller: function foo(call) { return call(); }
console.log(bar()); // caller: null

// *NOTE. Node.js 환경에서 실행한 결과는 다를 것이다. 그 이유는 모듈과 관계가 있다.