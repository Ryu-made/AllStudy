// this 키워드의 객체 참조
// 전역의 this = 전역 객체
console.log(this); // {}

function square(number) {
  // 일반 함수 내부에서 this (strict mode에서는 undefined)
  console.log(this); // <ref *1> Object [global] { ... }
  return number ** 2;
}
square(3);
square(4);

const person = {
  name: 'Jung',
  getName() {
    // 객체 내부에서 this (=person)
    console.log(this); // { name: 'Jung', getName: [Function: getName] }
    return this.name;
  }
};
console.log(person.getName()); // 'Jung'

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킴
  console.log(this); // Person { name: 'Park' } // Person { name: 'Choi' }
  // 인스턴스를 생성할 때마다 항상 다른 객체와 프로퍼티 값이 
  // 독립적으로 생성된다는 것을 기억하자.
}

const me = new Person('Park');
const you = new Person('Choi');