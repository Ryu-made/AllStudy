// 프로토타입 기반으로 상속을 구현하는 예제이다. 불필요한 중복을 제거하는 목적.

// 생성자 함수 선언
function Circle(radius) {
  this.radius = radius;
  // 함수 객체에 인스턴스 메소드를 추가하지 않았다.
}

/* 
 Circle 생성자 함수가 생성한 모든 인스턴스가 
 getArea 메소드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
*/
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

/* 
 Circle 생성자 함수가 생성한 모든 인스턴스는
 프로토타입 Circle.prototype으로부터 getArea 메소드를 상속받는다.
 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 
 하나의 getArea 메소드를 공유한다.
*/
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141593..
console.log(circle2.getArea()); // 12.566371..
