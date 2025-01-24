// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름 5인 Circle
const circle1 = new Circle(5);
// 반지름 10인 Circle
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10 
console.log(circle2.getDiameter()); // 20

// new 연산자 없이 호출하면 일반 함수의 호출이 된다.
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle은 반환문이 없다. (암묵적 undefined)
console.log(circle3); // undefined

// 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킨다.
console.log(radius); // 15