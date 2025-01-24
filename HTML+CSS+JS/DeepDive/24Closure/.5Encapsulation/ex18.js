const Person = (function () {
  let _age = 0;

  // 생성자 함수
  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }

  // 프로토타입 메소드
  Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name} and I'm ${_age} years old.`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Kang', 16);
me.sayHi(); // 'Hi! My name is Kang and I'm 16 years old.'

console.log(me.name); // 'Kang'
console.log(me._age); // undefined

const you = new Person('Kwon', 24);
you.sayHi(); // 'Hi! My name is Kwon. and I'm 24 years old.'

console.log(you.name); // 'Kwon'
console.log(you._age); // undefined

/* 
 * _age 변수를 지역 변수로 선언해서 
 * 정보 은닉(private)이 이루어진 것 같이 보이지만
 * 생성자 함수로 객체를 생성할 때마다
 * 프로토타입 메소드에서 호출하는 지역 변수의 값은 
 * 유지되지 못하고 상시 바뀐다.
 * 그래서 완전한 private이라고 할 수 없다.
 */
me.sayHi(); // 'Hi! My name is Kang. and I'm 24 years old.'