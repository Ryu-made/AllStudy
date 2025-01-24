// 오버라이딩과 섀도잉 예제이다.

const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메소드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}.`);
  };

  // 생성자 함수를 반환
  return Person;
}());

// 생성자 함수의 인스턴스를 저장
const me = new Person('Ryu');

// 인스턴스 메소드
me.sayHello = function () {
  console.log(`Hello! My name is ${this.name}.`);
};

// 인스턴스 메소드가 호출된다. 대신 프로토타입 메소드가 가려진 상태이다.
me.sayHello(); // 'Hello! My name is Ryu.'


// 인스턴스 메소드를 삭제한다.
delete me.sayHello;
// 인스턴스에 없는 메소드는 프로토타입에서 찾아 호출한다.
me.sayHello(); // 'Hi! My name is Ryu.'

// 인스턴스 메소드를 재삭제한다.
delete me.sayHello;
// 프로토타입 메소드를 호출한다. 
// 인스턴스에서 프로토타입 프로퍼티를 삭제, 변경하는 것은 불가하다.
me.sayHello(); // 'Hi! My name is Ryu.'


// 프로토타입 메소드 변경은 프로토타입에 직접 접근한다.
Person.prototype.sayHello = function () {
  console.log(`Hello guys! My name is ${this.name}.`);
};
me.sayHello(); // 'Hello guys! My name is Ryu.'

// 프로토타입 메소드 삭제는 프로토타입에 직접 접근한다.
delete Person.prototype.sayHello;
// 드디어 프로토타입 메소드도 삭제가 되었다.
me.sayHello(); // TypeError: me.sayHello is not a function