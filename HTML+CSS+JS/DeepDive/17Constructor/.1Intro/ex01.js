// 생성자 함수 호출: new Object()

// 기본값인 빈 객체가 생성된다.
const person = new Object();

// 프로퍼티를 추가한다.
person.name = 'Song';
person.sayHello = function () {
  console.log(`Hi! My name is ${this.name}.`);
};

console.log(person); // { name: 'Song', sayHello: [Function (anonymous)] }
person.sayHello(); // 'Hi! My name is Song.'