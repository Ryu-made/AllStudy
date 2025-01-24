// 생성자 함수
function Circle(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않으면 new.target이 undefined이다.
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출, 인스턴스를 반환한다.
    return new Circle(radius);
  }

  // IE 혹은 구 브라우저 버전은 new.target 대신에 사용할 수 있는 패턴이 있다.
  // (new.target 변수 자체가 없으므로 위의 조건문이 없어야 한다.)
  // this는 생성자 없이 전역 객체(window)가 되므로 Circle과 연결되지 않는다.
  if (!(this instanceof Circle)) {
    // new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 함수를 호출해도 new.target 연산자가 생성자 함수를 호출하게 해준다.
const circle = Circle(5);
// 생성자 함수 호출과 동일한 메소드 구현 가능
console.log(circle.getDiameter()); // 10