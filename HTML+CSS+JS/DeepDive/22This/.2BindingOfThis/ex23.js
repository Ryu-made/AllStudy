const person = {
  name: 'Lee',
  foo(callback) {
    // 1) foo 함수의 콜백 함수가 호출되기 이전에는 this가 person 객체를 가리킨다.
    setTimeout(callback, 100);
  }
};

person.foo(function () {
  // 2) 콜백 함수가 일반 함수로 호출된 시점의 this는 전역 객체를 가리킨다.
  // 이러한 이유로 콜백 함수는 this가 가리키는 객체를 일치시켜야 한다.
  console.log(`Hi! My name is ${this.name}.`); // Hi! My name is undefined.
  // 브라우저 환경에서 window.name은 기본값이 ''이고,
  // Nodejs 환경에서 global.name은 undefined이다.
});