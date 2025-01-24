// 객체 리터럴로 생성한 obj 객체이다.
const obj = {};
const obj2 = { a: 12 };
// 객체 리터럴로 생성했더라도 결국 constructor 프로퍼티가 가리키는 생성자 함수는 Object이다.
console.log(obj.constructor === Object); // true
console.log(obj2.constructor === Object); // true