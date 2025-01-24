// 생성자 함수
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi! My Name is ${this.name}.`);
};

const me = new Person('Kang');
me.sayHi(); // 'Hi! My Name is Kang.'

// 클래스
class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  // 클래스 내부에 정의한 메소드는 곧 프로토타입 메소드가 된다.
  introduct() {
    console.log(`My ${this.type}'s name is ${this.name}.`);
  }
}

const myPet = new Pet('puppy', 'Katty');
// 클래스의 프로토타입 메소드를 호출
myPet.introduct(); // 'My puppy's name is Katty.'