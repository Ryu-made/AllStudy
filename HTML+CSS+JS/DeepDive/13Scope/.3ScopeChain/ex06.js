function foo() {
  console.log('global function foo');
}

function bar() {
  // 중첩 함수
  function foo() {
    console.log('local function foo');
  }
  foo(); // 지역 함수 호출
}

bar(); // 'local function foo'
foo(); // 전역 함수 호출: 'global function foo'