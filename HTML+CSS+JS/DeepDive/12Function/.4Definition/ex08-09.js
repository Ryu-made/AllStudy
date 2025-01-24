// 기명 함수(이름이 있는 함수) 리터럴은
// 단독으로 사용하면 함수 선언문으로 해석된다.
// 그래서 함수 이름을 생략할 수 없다.
function foo() {
  console.log(`I'm foo.`);
}

foo(); // 'I'm foo.'

// 그룹 연산자 내의 함수 리터럴은 표현식으로 해석된다.
// 그래서 피연산자로 사용할 수 없다.
(function bar() { console.log(`I'm bar.`) })
bar(); // ReferenceError: bar is not defined