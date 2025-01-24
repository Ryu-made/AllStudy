class Person {
  constructor(name) {
    this.name = name;
    // return문을 명시적으로 작성해 암묵적인 this 반환을 무시한다.
    return { anony: 'mous' };
  }
}

// constructor에서 명시적으로 반환한 객체를 저장한다.
const me = new Person('Hong');
console.log(me); // { anony: 'mous' }