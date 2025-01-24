// 생성자 함수
function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  }
}
// 인스턴스 생성
const circle1 = new Circle(5);
// 매개변수로 받는 인수 5는 Circle 객체의 반지름(radius)을 의미한다.

