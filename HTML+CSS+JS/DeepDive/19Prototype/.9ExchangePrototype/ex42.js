const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    // 2) constructor 프로퍼티와 생성자 함수 간의 연결 재설정 (복구)
    constructor: Person,
    sayHello() {
      console.log(`Hi! My name is ${this.name}.`);
    }
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Song');

console.log(me.constructor === Person); // true
console.log(me.constructor === Object); // false