// 화살표 함수는 non-constructor이다. (생성자 함수로 인식하지 X)
const Person = name => {
  this.name = name;
};

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.hasOwnProperty('prototype')); // false
console.log(Person.prototype); // undefined

// ES6의 메소드 축약 표현을 정의한 메소드는 non-constructor.
const obj = {
  foo() { }
};
// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj.hasOwnProperty('prototype')); // false
console.log(obj.prototype); // undefined