// this 바인딩: this 식별자와 가리킬 객체를 연결하는 과정(순서)

function Circle(radius) {
  // 1. 암묵적으로 인스턴스(빈 객체)가 생성되고 this에 바인딩된다.
  console.log(this); // Circle {} (미리 빈 객체를 생성한다.)
  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.
}

// 인스턴스 생성(과 동시에), Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
// 생성자 함수로 인해 이미 완성된 객체임을 알 수 있다.
console.log(circle); // Circle { radius: 1, getParameter: [Function (anonymous)] }