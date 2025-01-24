// 1. 객체 확장 금지: Object.preventExtensions 메소드
// 말그대로 확장을 금지하므로 프로퍼티 추가를 못한다.

const person = {
  name: {
    firstName: 'Daehyun',
    lastName: 'Ryu'
  },
  age: 26
}

// Object.isExtensible은 확장 가능한지 확인한다.(기본값: true)
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지한다.
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지되지만 일반적으로 무시한다.
person.nation = 'USA'; // strict mode에서는 에러 발생
console.log(person); // { name: { firstName: 'Daehyun', lastName: 'Ryu' }, age: 26 }

// 프로퍼티 삭제는 가능하다.
delete person.age;
console.log(person); // { name: { firstName: 'Daehyun', lastName: 'Ryu' } }

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다. (에러 발생)
// 방금 삭제한 프로퍼티 age도 추가를 못한다.
Object.defineProperty(person, 'age', { value: 16, writable: true });
// TypeError: Cannot define property age, object is not extensible