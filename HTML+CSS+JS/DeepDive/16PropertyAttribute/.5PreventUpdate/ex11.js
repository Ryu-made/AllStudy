// 2. 객체 밀봉: Object.seal 메소드

const person = { name: 'Daehyun Ryu' };

// Object.isSealed 메소드는 밀봉(seal)된 객체인지 확인한다.(기본값: false)
console.log(Object.isSealed(person)); // false

// person 객체를 밀봉하면 프로퍼티 추가, 삭제, 재정의를 모두 금지한다.
Object.seal(person); // person 객체를 밀봉(seal)한다
console.log(Object.isSealed(person)); // true

// 밀봉(seal)된 객체는 [[Configurable]] 값이 false로 바뀐다.
console.log(Object.getOwnPropertyDescriptors(person));
/* 
{
  name: {
    value: 'Daehyun Ryu',
    writable: true,
    enumerable: true,
    configurable: false <<
  }
}
*/

// 프로퍼티 추가 금지
person.age = 26; // strict mode에서는 에러 발생
console.log(person); // { name: 'Daehyun Ryu' }

// 프로퍼티 삭제 금지
delete person.name; // strict mode에서는 에러 발생
console.log(person); // { name: 'Daehyun Ryu' }

// 프로퍼티 값의 갱신(재할당)은 가능하다.
person.name = 'Jeseok Yoo';
console.log(person); // { name: 'Jeseok Yoo' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name
