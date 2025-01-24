// .1 in 연산자로 존재 확인
/** 
 * key: 프로퍼티 키를 나타내는 '문자열'
 * object: 객체로 평가되는 표현식(값)
 * 
 * key in object
*/

const person = {
  name: 'Kang',
  address: 'Busan'
};

// person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person); // true
// person 객체에 address 프로퍼티가 존재한다.
console.log('address' in person); // true
// person 객체에 age 프로퍼티가 존재한다.
console.log('age' in person); // false

// 상위 프로토타입 객체인 Object.prototype 메소드도 in 연산자로 확인한다.
console.log('toString' in person); // true
