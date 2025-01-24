/* ** __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
  [[Prototype]] 내부 슬롯의 값인 프로토타입에 접근하기 위해서는
  상호 참조에 의한 프로토타입 체인이 생성되는 것을 방지하기 위해
  접근자 프로퍼티를 사용한다.
*/

// 상속 관계가 될 객체 선언
const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;

// parent의 프로토타입을 child로 설정 (에러 발생)
parent.__proto__ = child; // TypeError: Cyclic __proto__ value

/* 
 서로가 자신의 프로토타입이 되는 순환 참조(circular reference) 프로토타입 체인이 만들어지면
 프로토타입 체인의 종점이 존재하지 않는 무한루프가 형성된다.
 그래서 __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하고 교체하면
 자바스크립트 엔진에서 이러한 문제를 먼저 체크해준다.
*/