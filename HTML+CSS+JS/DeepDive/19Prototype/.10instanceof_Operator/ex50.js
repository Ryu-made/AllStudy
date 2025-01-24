const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}.`);
    }
  };

  return Person;
}());

const me = new Person('Ryu');

// constructor 프로퍼티의 생성자 함수 간의 연결 파괴 이후,
// 여전히 instanceof 연산 평가는 유지된다.
console.log(me.constructor === Person); // false

console.log(me instanceof Person); // true
console.log(me instanceof Object); // true