// 사용자 정의 함수 Person에 프로토타입 메소드를 추가한다.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}.`);
};

const me = new Person('Ryu');
const you = new Person('Kang');

// sayHello 메소드는 Person.prototype 으로부터 상속받아 사용할 수 있다.
me.sayHello(); // 'Hi! My name is Ryu.'
you.sayHello(); // 'Hi! My name is Kang.'