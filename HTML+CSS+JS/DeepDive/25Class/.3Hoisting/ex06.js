/**
 * 클래스와 함수 선언문은 런타임 이전에 먼저 평가된다.
 * 클래스 평가 시점에 생성된 함수 객체는 constructor이다.
 * 그러나 생성자 함수가 단독으로 존재할 수 없고 
 * 프로토타입과 쌍으로 함께 생성된다.
 * 단지 클래스는 함수 선언문과 달리 정의 이전에 참조할 수 없다.
 */

// 클래스 참조
console.log(Person); // 'ReferenceError: Cannot access 'Person' before initialization'
// 클래스 선언문
class Person { }