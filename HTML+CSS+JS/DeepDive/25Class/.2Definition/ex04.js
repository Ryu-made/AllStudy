/** 클래스는 생성자 함수와 정의 방식이 매우 유사하다. */
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성, 초기화
    this.name = name; // 접근 방식은 public
  }

  // 프로토타입 메소드
  sayHi() {
    console.log(`My name is ${this.name}.`);
  }

  static sayGoodbye() {
    console.log(`Good-bye!`);
  }
}


// 인스턴스 생성
const me = new Person('Kong');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // 'Kong'
// 프로토타입 메소드 호출
me.sayHi(); // 'My name is Kong.'
// 정적 메소드 호출
Person.sayGoodbye(); // 'Good-bye!'