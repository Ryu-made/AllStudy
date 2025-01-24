// Object.create는 정적(static) 메소드다.
const obj = Object.create({ name: 'Hong' });

// Object.prototype.hasOwnProperty는 프로토타입(non-static) 메소드다.
console.log(obj.hasOwnProperty('name')); // false
console.log(obj.name); // 'Hong' (익명 프로토타입 객체의 name 프로퍼티 값)