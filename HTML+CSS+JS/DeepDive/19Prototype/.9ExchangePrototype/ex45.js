// 프로토타입 교체를 통해 상속 관계를 동적으로 변경하는 예제이다.

function Person(name) {
  this.name = name;
}

const me = new Person('Ryu');

// 프로토타입으로 교체할 객체
const parent = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 생성
  constructor: Person,
  sayHello() {
    console.log(`Hi! My name is ${this.name}.`);
  }
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

// me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// me.__proto__ = parent;

me.sayHello(); // 'Hi! My name is Ryu.'

console.log(me.constructor === Person); // true
console.log(me.constructor === Object); // false

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person.prototype === Object.getPrototypeOf(me)); // true

/*
 이렇게 프로토타입 교체를 통한 동적 상속 관계 변경은 많이 번거롭다.
 프로토타입을 직접 교체하기 보다 '직접 상속' 방법을 사용하거나,
 ES6 부터 사용 가능한 클래스를 사용하는 것이 훨씬 편리하다.
*/