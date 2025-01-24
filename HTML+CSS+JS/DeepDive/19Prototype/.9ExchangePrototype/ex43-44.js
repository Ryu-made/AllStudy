function Person(name) {
  this.name = name;
}

const me = new Person('Ryu');

// 프로토타입 교체할 객체
const parent = {
  sayHello() {
    console.log(`Hi! My name is ${this.name}.`);
  }
};

// 1) me 객체의 프로토타입을 parent 객체로 교체
Object.setPrototypeOf(me, parent);
// me.__proto__ = parent;

me.sayHello(); // 'Hi! My name is Ryu.'

