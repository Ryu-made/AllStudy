const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'SangJin',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'Lee',
  enumerable: true
});

// 디스크립터 객체의 프로퍼티 값을 모두 정의한 상태이다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firstName { value: 'SangJin', writable: true, enumerable: true, configurable: true }

// 디스크립터 객체의 value 프로퍼티 외에 다른 값을 누락시킨 상태이다. 
// 기본값은 undefined, false 이므로 누락시킨 모든 값은 false로 할당된다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName { value: 'Lee', writable: false, enumerable: false, configurable: false }

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for ... in 문, Object.keys 등으로 열거하지 못한다.
// lastName 프로퍼티는 열거되지 않아 무시하고 넘어간다.
console.log(Object.keys(person)); // [ 'firstName' ]

person.firstName = 'Jieun';
console.log(person.firstName); // 'Jieun'
// [[Writable]] 값이 false이면 [[Value]] 값을 변경할 수 없으므로
// 변경한 값에 대해 무시하고 넘어간다.(에러 X)
person.lastName = 'Jeon';
console.log(person.lastName); // 'Lee'
// [[Configurable]] 값이 false이면 해당 프로퍼티 삭제가 불가능하다.
// lastName 프로퍼티는 이때 삭제되지 않고 무시하고 넘어간다.(에러 X)
delete person.lastName;
console.log(person.lastName); // 'Lee'
// 일반적으로 프로퍼티가 삭제되었다면 undefined가 되어야 한다.

// [[Configurable]]의 값이 false이므로 lastName 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true });
// TypeError: Cannot redefine property: lastName

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  // getter
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
/* 
fullName {
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
}
*/

person.fullName = 'Jieun Jeon';
// [[Enumerable]]이 false이면 객체 출력에서 생략되는 듯하다. (책이랑 다름)
console.log(person); // { firstName: 'Jieun', fullName: [Getter/Setter] }
// 그러나 하나의 프로퍼티로는 문제가 없다.
console.log(person.lastName) // 'Lee'