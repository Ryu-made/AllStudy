// 콜백 함수의 this가 가리키는 객체를 외부 함수와 일치시키는 방법은
// bind 메소드를 사용하는 것이다.
const person = {
  name: 'Seong',
  foo(callback) {
    // bind 메소드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function () {
  // 함수 내부의 this 연산자가 person 객체에 잘 바인딩되었다.
  console.log(`Hi! My name is ${this.name}.`); // 'Hi! My name is Seong.'
});