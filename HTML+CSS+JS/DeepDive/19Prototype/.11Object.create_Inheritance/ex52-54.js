let obj = { a: 1 };
// 일반적으로 모든 객체는 Object.prototype의 빌트인 메소드를 상속받는다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.propertyIsEnumerable('a')); // true

// 프로토타입이 null인 객체는 프로토타입 체인의 종점에 위치하기 때문에,
// 결국 상속하고 있는 다른 부모 객체가 존재하지 않는다.
obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null); // true

// obj는 (체인의 종점이므로) Object.prototype의 빌트인 메소드를 사용할 수 없다.
console.log(obj.hasOwnProperty('a')); // TypeError: obj.hasOwnProperty is not a function

// 이러한 에러발생 위험을 없애기 위해
// Object.prototype의 빌트인 메소드를 간접적으로 호출하는 것이 좋다.
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true