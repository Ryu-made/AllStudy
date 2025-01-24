// 3. 객체 동결: Object.freeze 메소드
// Object.seal 기능과 더불어 프로퍼티 값 갱신(재할당)도 금지한다.
// 즉, 동결된 객체라서 '읽기 전용'이다.

const person = { name: 'Daehyun Ryu' };

// Object.isFrozen 메소드는 동결(freeze)된 객체인지 확인한다.(기본값: false)
console.log(Object.isFrozen(person)); // false

// person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person);
console.log(Object.isFrozen(person)); // true

// 동결(freeze)된 객체라면 [[Writable]]과 [[Configurable]]값이 false이다.
console.log(Object.getOwnPropertyDescriptors(person));
/* 
{
  name: {
    value: 'Daehyun Ryu',
    writable: false,
    enumerable: true,
    configurable: false
  }
}
*/

// 프로퍼티 추가 금지
person.age = 26; // strict mode에서는 에러 발생
console.log(person); // { name: 'Daehyun Ryu' }

// 프로퍼티 삭제 금지
delete person.name; // strict mode에서는 에러 발생
console.log(person); // { name: 'Daehyun Ryu' }

// 프로퍼티 값의 갱신(재할당) 금지
person.name = 'Jeseok Yoo'; // strict mode에서는 에러 발생
console.log(person); // { name: 'Daehyun Ryu' }

// 프로퍼티 어트리뷰트 재정의 금지
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name