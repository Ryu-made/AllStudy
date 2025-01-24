class Person {
  constructor(name) {
    this.name = name;
    // return 문에 원시값으로 넣으면 원시값이 무시되고 정상적인 반환값이 된다.
    return 250;
  }
}

// constructor에서 암묵적으로 반환한 인스턴스를 저장한다.
const me = new Person('Hong');
console.log(me); // Person { name: 'Hong' }