const person = {
  name: 'Song',
  region: 'Daegu',
  gender: 'Male'
};

// for ... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for (const prop in person) {
  console.log(`${prop}: '${person[prop]}'`);
}
/* 
 name: 'Song'
 address: 'Daegu'
 gender: 'Male'
*/