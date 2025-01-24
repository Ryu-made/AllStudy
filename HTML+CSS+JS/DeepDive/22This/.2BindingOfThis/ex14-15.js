const person = {
  name: 'Song',
  getName() {
    // 메소드 내부의 this는 메소드를 호출한 객체에 바인딩된다.
    return this.name;
  }
};

// 메소드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // 'Song'

/* 
주의할 점은 getName 메소드는 person 객체에 포함되지 않고
getName 이름으로 정의된 프로퍼티가 
독립적으로 존재하는 함수 객체를 가리키는 것이다.
그렇기 때문에 다른 객체의 프로퍼티나 일반적인 변수에 할당하여
다른 객체의 메소드 혹은 일반 함수로써 호출될 수도 있다.
*/

const anotherPerson = {
  name: 'Eun'
};
// person 객체의 getName 메소드를 anotherPerson 객체의 프로퍼티 값으로 할당
anotherPerson.getName = person.getName;
// getName 메소드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // 'Eun'

// getName 메소드를 변수에 할당
const getName = person.getName;
/*
// 암묵적 전역
(function () { name = 'Ryu'; }());
*/
// getName 메소드를 일반 함수로 호출
console.log(getName()); // undefined
// 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 프로퍼티이며
// 기본값은 ''(빈 문자열)이다.
// Nodejs 환경에서 global.name은 undefined이다.