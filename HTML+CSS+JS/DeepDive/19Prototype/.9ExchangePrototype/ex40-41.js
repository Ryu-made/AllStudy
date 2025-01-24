const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}.`);
    }
  };

  // 생성자 함수를 반환
  return Person;
}());

const someone = new Person('Min');
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(someone.constructor === Person); // false
// 그래서 프로토타입 체인을 따라 종점인 Object.prototype의 constructor가 검색된다.
console.log(someone.constructor === Object); // true
