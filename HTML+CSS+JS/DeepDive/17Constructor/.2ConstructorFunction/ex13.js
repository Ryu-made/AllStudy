// 함수는 객체다.
function foo() { }

// 함수는 객체이므로 프로퍼티를 포함할 수 있다.
foo.prop = 10;

// 함수는 객체이므로 메소드를 포함할 수 있다.
foo.run = function () {
  console.log(this.prop); // 10
};

foo.run();