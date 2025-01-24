// 정보 은닉의 예제
function Person(name, age) {
  this.name = name; // public
  let sAge = age; // private

  // 인스턴스 메소드
  this.say = function () {
    console.log(`Hi! My name is ${this.name} and I'm ${sAge} years old.`);
  };
}

const me = new Person('Kim', 25);
me.say(); // 'Hi! My name is Kim and I'm 25 years old.'
console.log(me.name); // 'Kim'
console.log(me.sAge); // undefined

const you = new Person('Kang', 41);
// 인스턴스 메소드는 객체가 생성될 때마다 기본적으로 중복 생성된다.
you.say(); // 'Hi! My name is Kang and I'm 41 years old.'
console.log(you.name); // 'Kang'
console.log(you.sAge); // undefined