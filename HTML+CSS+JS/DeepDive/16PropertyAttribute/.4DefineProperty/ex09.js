// Object.defineProperties 메소드로 여러 개의 프로퍼티를 한 번에 정의할 수 있다.
const person = {};

Object.defineProperties(person, {
  firstName: {
    value: 'Daehyun',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Ryu',
    writable: true,
    enumerable: true,
    configurable: true
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});

console.log(Object.getOwnPropertyDescriptors(person));
person.fullName = 'Sehyeok Park';
console.log(person.fullName); // 'Sehyeok Park'
console.log(person.firstName); // 'Sehyeok'