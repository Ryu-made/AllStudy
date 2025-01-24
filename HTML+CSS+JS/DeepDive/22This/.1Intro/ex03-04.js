// ex01의 수정
const circle1 = {
  radius: 5,
  getDiameter() {
    // this는 '메소드를 호출한 객체'를 가리킴
    return 2 * this.radius;
  }
};

console.log(circle1.getDiameter()); // 10

// ex02의 수정
function Circle(radius) {
  // this는 '생성자 함수가 생성할 인스턴스'를 가리킴
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // this는 '생성자 함수가 생성할 인스턴스'를 가리킴
  return 2 * this.radius;
};

// 인스턴스 생성
const circle2 = new Circle(7);
console.log(circle2.getDiameter()); // 14