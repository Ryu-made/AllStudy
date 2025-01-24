// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Ryu');

// 결국 Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__); // true

/* 
모든 객체가 가지고 있는 Object.prototype에게 상속받은 __proto__ 접근자 프로퍼티와
함수 객체(생성자 함수)만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로퍼티이다.
다만 이들 프로퍼티를 사용하는 주체가 다를 뿐이다.
*/
