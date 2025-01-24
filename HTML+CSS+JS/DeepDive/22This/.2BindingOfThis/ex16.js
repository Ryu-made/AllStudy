function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Song');

// getName 메소드를 호출한 객체는 me이다.
console.log(me.getName()); // 'Song'

Person.prototype.name = 'Yun';

// getName 메소드를 호출한 객체는 Person.prototype이다.
// prototype 객체도 (존재한다면) 직접 메소드를 호출할 수 있다.
console.log(Person.prototype.getName()); // 'Yun'