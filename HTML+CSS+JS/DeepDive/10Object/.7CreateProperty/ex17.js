var person = {
  name: 'Ryu'
};
// person 객체에 없는 age 프로퍼티를 동적으로 생성하는 과정
person.age = 26;
console.log(person); // { name: 'Ryu', age: 26 }
