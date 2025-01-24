function Person(name, age) {
  this.name = name;
  let sAge = age;
}

Person.prototype.say = function () {
  // Person 생성자 함수의 지역 변수는 참조할 수 없다. (캡슐화)
  console.log(`Hi! My name is ${this.name} and I'm ${sAge} years old`);
  // ReferenceError: sAge is not defined
};
// 프로토타입 객체에 존재하지 않는 변수 sAge를 참조하면 에러가 발생한다.
(new Person('Song', 20)).say();