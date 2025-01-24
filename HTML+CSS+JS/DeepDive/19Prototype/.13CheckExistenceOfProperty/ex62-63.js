// .2 Object.prototype.hasOwnProperty 메소드

const person = { name: 'Kang' };
// 메소드로 객체에 특정 프로퍼티가 존재하는지 확인한다.
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false
// 객체 자신 고유의 프로퍼티 키인 경우에만 true가 된다.
console.log(person.hasOwnProperty('toString')); // false