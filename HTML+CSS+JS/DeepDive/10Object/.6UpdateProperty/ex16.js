var person = {
  name: 'Park',
  age: 80
};

// 프로퍼티 하나를 갱신함.
person.name = 'Yoon';
// name의 값만 바뀌고 age의 값은 그대로이다.
console.log(person); // { name: 'Yoon', age: 80 }