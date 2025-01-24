// 생성자 함수의 최소한의 규칙

function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  // ????.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  // return 2 * ????.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle = new Circle(5);

// this: 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-referencing variable)
// 기본적으로 함수를 선언하면 그 내부 객체를 지역 변수처럼 사용할 수 있다.
// 그 중 가장 우선적으로 전달되는 arguments와 this가 있다.
// this의 바인딩은 함수의 호출 시점에 결정되므로 동적인 객체를 반환하는 것이다.
