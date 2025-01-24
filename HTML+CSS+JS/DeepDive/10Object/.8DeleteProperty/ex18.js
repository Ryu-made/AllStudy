var person = {
  name: 'Song',
  age: 24
};
// 프로퍼티 동적 생성
person.gender = 'Male';
// 프로퍼티 삭제
delete person.age;
// 없는 프로퍼티는 삭제해도 변화가 일어나지 X
delete person.nation;
console.log(person); // { name: 'Song', gender: 'Male' }
