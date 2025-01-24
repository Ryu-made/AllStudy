/*
상속(Inheritance)은 객체지향 프로그래밍의 핵심 개념으로, 
어떤 객체의 프로퍼티 또는 메소드를 다른 객체가 상속받아 
'그대로 사용'할 수 있는 것을 말한다.

프로토타입 기반의 상속을 구현하는 목적은 
불필요한 중복제거와 코드를 적극적으로 재사용하는 것이다.
*/
// 생성자 함수 선언
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);

// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

/* 
 Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
 getArea 메소드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
 getArea 메소드를 하나만 생성하고 모든 인스턴스가 공유하는 것이 바람직하다. 
*/
console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.141593..
console.log(circle2.getArea()); // 12.566371..