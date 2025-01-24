const person = {
  name: 'Ryu',
  address: 'Busan',
  __proto__: { age: 26 }
};
// Object.keys는 열거 가능한 키를 배열 형태로 담는다.
console.log(Object.keys(person)); // [ 'name', 'address' ]
// values와 entries는 ES8부터 도입되었다.
// Object.values는 열거 가능한 프로퍼티 값을 배열 형태로 담는다.
console.log(Object.values(person)); // [ 'Ryu', 'Busan' ]
// Object.entries는 열거 가능한 프로퍼티 키와 값의 쌍 배열을 배열에 담는다. (2중 배열) 
console.log(Object.entries(person)); // [ [ 'name', 'Ryu' ], [ 'address', 'Busan' ] ]
// entries는 forEach로 열거할 때도 [키, 값] 형식의 배열로 요소를 배분한다.
Object.entries(person).forEach(([key, value]) => console.log(key, value));
/* 
name Ryu
address Busan
*/