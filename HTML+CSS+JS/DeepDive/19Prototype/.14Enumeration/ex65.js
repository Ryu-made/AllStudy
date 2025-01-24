
const person = {
  name: 'Kang',
  address: 'Incheon'
};

// in 연산자는 기본적으로 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in person); // true

// for...in 문은 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거하지만,
// Object.prototype에 속한 프로퍼티는 열거되지 않는다.
for (const prop in person) {
  console.log(`${prop}: '${person[prop]}'`);
}
/* 
name: 'Kang'
address: 'Incheon'
*/

/* 
  Object.prototype의 프로퍼티는 어트리뷰트 [[Enumerable]] 값이 false이기 때문에
  기본적으로 for...in 문에서 열거되지 않는다.
*/