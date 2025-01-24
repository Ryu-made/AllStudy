// Object.create 메소드가 선언된 구조를 보면 다음과 같다.
/** 
 * 
 * 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체 생성하여 반환한다.
 * @param {Object} prototype - 생성할 객체의 프로토타입으로 지정할 객체
 * @param {Object} [propertiesObject] - 생ㅅ어할 객체의 프로퍼티를 갖는 객체
 * @returns {Object} 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체
 * 
 * Object.create(prototype[, prototiesObject]);
 */

// obj -> null
let obj = Object.create(null);
// 프로토타입이 null이라는 것은 프로토타입 체인의 종점을 의미한다.
console.log(Object.getPrototypeOf(obj) === null); // true

// Object.prototype을 상속받지 못한다.
console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj -> Object.prototype -> null
// obj = {}; 와 결과가 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj = { x: 1 }; 와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true }
});
// 위 코드 방식은 아래와 동일하다.
/* 
   obj = Object.create(Obejct.prototype);
   obj.x = 1;
*/
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다. 
// (현재 obj의 상속 객체인 myProto도 Object.prototype을 상속받는다.)
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Kang'); 와 동일하다.
obj = Object.create(Person.prototype); // Person 함수 자체가 아니다.
obj.name = 'Kang';

console.log(obj.name); // 'Kang'
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true