// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
let obj = Object.create(null);

// 프로토타입이 존재하지 않는다고 출력된다.
console.log(obj.__proto__); // undefined

// 그래서 __proto__ 보다 Object.getPrototypeOf 메소드를 사용하는 편이 좋다.
// 프로토타입이 존재한다고 출력된다.
console.log(Object.getPrototypeOf(obj)); // null

// 프로토타입 교체시에는 Object.setPrototypeOf 메소드를 사용하는 것을 권장한다.
obj = {};
const parent = { a: 1 };

// obj 객체의 프로토타입을 취득함
let proto = Object.getPrototypeOf(obj); // let proto = obj.__proto__;

// obj 객체의 프로토타입을 교체함
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.a); // 1