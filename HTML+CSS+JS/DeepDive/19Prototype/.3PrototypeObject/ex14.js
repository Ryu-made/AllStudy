// .3 프로토타입이 constructor 프로퍼티와 생성자 함수
// 함수 객체가 생성될 때 이뤄지는 연결 프로퍼티이다.
// constructor는 객체 자신을 참조하고 있는 생성자 함수를 가리킨다.
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Ryu');

// me 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person); // true
