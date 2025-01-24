// intanceof 연산자를 함수로 작성하면 이렇다. (instance는 좌항, constructor은 우항)
function isInstanceof(instance, constructor) {
  // instance의 프로토타입
  const prototype = Object.getPrototypeOf(instance);

  // 재귀 탈출 조건
  // prototype === null이면 프로토타입 체인의 종점에 다다른 것이다.
  if (prototype === null) return false;

  // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
  // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
  return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

// 생성자 함수
function Person(name) {
  this.name = name;
}
// 객체 생성
const me = new Person('Ryu');

// 확인 출력
console.log(isInstanceof(me, Person)); // true
console.log(isInstanceof(me, Object)); // true
console.log(isInstanceof(me, Array)); // false