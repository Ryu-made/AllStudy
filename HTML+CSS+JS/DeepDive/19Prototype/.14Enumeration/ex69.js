const person = {
  name: 'Hwang',
  address: 'Kyeongju',
  __proto__: { age: 20, favor: 'sing' }
  // age, favor은 hasOwnProperty 메소드에서 false로 평가되는 프로퍼티이다.
};

// 상속받은 프로토타입의 프로퍼티를 제외하고 객체 자신의 프로퍼티만 열거하려면
// 이런 방식으로 프로퍼티 소유를 확인하면 된다.
for (const prop in person) {
  // 객체 자신의 프로퍼티인지 확인한다.
  if (!person.hasOwnProperty(prop)) continue;
  console.log(`${prop}: '${person[prop]}'`)
}
/* 
name: 'Hwang'
address: 'Kyeongju'
*/