// Object.getOwnPropertyDescriptor 메소드로 프로퍼티 디스크립터 객체를 반환한다.
// 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
// Object.prototype의 프로퍼티들은 [[Enumerable]] 값이 false이므로 열거되지 않는다.
/*
{
  value: [Function: toString],
  writable: true,
  enumerable: false,
  configurable: true
}
*/

// 그래서 for...in 문은 프로토타입 체인 상에 존재하면서 [[Enumerable]] 값이 true인 프로퍼티를 순회하며 열거하는 것이다.
const person = {
  name: 'Song',
  address: 'Kwangju',
  __proto__: { age: 20 } // __proto__는 객체 person의 상속 부모 객체이다.
};

for (const prop in person) {
  console.log(`${prop}: '${person[prop]}'`);
}
/*
name: 'Song'
address: 'Kwangju'
age: '20'
*/