/* 
 instanceof 연산자는 좌항의 객체를 우항의 생성자 함수와 비교해서,
 생성자 함수의 prototype에 바인딩된 객체가 (ex. Object.prototype ) 
 좌변 객체의 프로토타입 체인에 존재하면 true가 되고 
 그 외에는 false가 된다.
 >> 즉, 생성자 함수와의 프로토타입 상속 관계 여부를 확인한다.
*/
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Ryu');

// Person.prototype이 me 객체 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person); // true

// Object.prototype이 me 객체 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person); // true