// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메소드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

// 생성자 함수로 직접 생성한다는 것만 기억하자.
// 정적 프로퍼티
Person.staticProp = 'static value';

// 정적 메소드
Person.staticMethod = function () {
  console.log('static method');
};

const me = new Person('Ryu');

// 생성자 함수에 추가한 정적 프로퍼티/메소드는 생성자 함수로 직접 호출한다.
Person.staticMethod(); // 'static method'

// 정적 프로퍼티/메소드는 생성된 인스턴스로는 호출할 수 없다.
// 인스턴스로 호출하려면 프로토타입 체인 상에 존재해야 한다.
me.staticMethod(); // TypeError: me.staticMethod is not a function