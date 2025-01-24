const person = {
  name: 'Jeong'
};
// 객체는 속성이 변경 가능한 값이다. 따라서 "재할당 없이" 변경이 가능하다.
person.name = 'Seok';

console.log(person); // { name: 'Seok' }