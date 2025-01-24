function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}.`);
};

const me = new Person('Ryu');
// Object.prototype 으로부터 상속받은 hasOwnProperty 메소드를 사용한다.
// me 객체가 프로토타입 체인을 따라 hasOwnProperty 메소드를 검색하여
// 종점인 Object.prototype에서 찾아내 호출한다.
console.log(me.hasOwnProperty('name')); // true;
// hasOwnProperty 메소드는 이런 방식으로도 가능하다.
console.log(Object.prototype.hasOwnProperty.call(me, 'name')); // true
// 만일 종점에서도 프로퍼티를 찾아내지 못한다면 undefined를 반환한다. (에러 예방법?)
console.log(me.anonyProp); // undefined


// me 객체의 프로토타입(부모 객체)은 Person.prototype이다.
console.log(Object.getPrototypeOf(me) === Person.prototype); // true

// Person.prototype의 프로토타입을 구하면 Object.prototype이 된다.
console.log(Object.getPrototypeOf(Person.prototype) == Object.prototype); // true

/* 
 me.hasOwnProperty('name'); 에서 
 - me 는 식별자이므로 전역 스코프에서 최종 검색된다.
 - 그리고 hasOwnProperty 메소드는 Object.prototype 프로퍼티로부터 상속받았으므로
 프로토타입 체인 종점인 Object.property에서 최종 검색된다.
 - 'name'은 me 객체의 고유 메소드를 찾는 동작에 포함될 인자이므로 
 객체 자기 자신의 프로퍼티에서만 검색한다.
 **핵심은 스코프 체인과 프로토타입 체인이 상호 협력하여 
 모든 식별자와 프로퍼티를 검색하는데 사용된다는 것이다.**
*/
