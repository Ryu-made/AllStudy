// ES5 버전: 생성자 함수
var Person = (function () {
  // 생성자 함수 선언
  function Person(name) {
    this.name = name;
  }
  // 프로토타입 메소드
  Person.prototype.sayHi = function () {
    console.log(`My name is ${this.name}.`);
  };

  // 생성자 함수 반환
  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // 'My name is Lee.'

/**
 * * 클래스가 생성자 함수와 동작하는 방식의 차이점
 * 
 * 1. 클래스를 new 연산자 없이 호출하면 에러가 발생한다.
 * 2. 클래스는 상속을 지원하는 extends와 super 키워드를 제공한다.
 * 3. 클래스는 "함수 호이스팅이 발생하지 않는 것처럼 동작"한다.
 * 4. 클래스 내부의 모든 코드는 암묵적으로 strict mode가 적용된다.
 * 5. 클래스의 constructor, 메소드 등은 모두 프로퍼티 어트리뷰트 중 [[Enumerable]]의 값이 false 이다. for문 등으로 열거되지 않는다는 뜻이다.
 * 
 * + 전반적으로 프로토타입 기반의 패턴보다 견고하고 명료한 면이 있다.
 * + 문법적 설탕으로 보기보다는 '새로운 객체 생성 매커니즘'이 더 정확한 말이다.
 */