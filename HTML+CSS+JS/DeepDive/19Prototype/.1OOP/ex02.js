/* 
자바스크립트 언어로 작성하는 프로그래머는 객체 속성을 통해 
다른 객체와 식별할 수 있다.
'속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조'를
객체라고 부른다.
객체지향 프로그래밍은 독립적 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.

이번에는 '상태(state)'를 나타내는 데이터와 연산을 수행하는 '동작(behavior)'에 대한 예시이다.
객체에선 상태 데이터를 '프로퍼티', 동작을 '메소드'라고 부른다.
*/

const circle = {
  radius: 5, // 반지름
  // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  },
  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
  // 원의 넓이
  getArea() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(circle);
/* 
{
  radius: 5,
  getDiameter: [Function: getDiameter],
  getPerimeter: [Function: getPerimeter],
  getArea: [Function: getArea]
}
*/
console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.415927..
console.log(circle.getArea()); // 78.539816..
