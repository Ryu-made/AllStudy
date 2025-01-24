// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
// (이것이 생성자 함수의 중요한 특이점이다.)
const circle = Circle(5);
console.log(circle); // undefined : 리턴할 값이 없음

// 일반 함수 내부의 this는 전역 객체 window|global을 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10
console.log(globalThis.getDiameter()); // 10

let res = circle.getDiameter();
// TypeError: Cannot read properties of undefined (reading 'getDiameter')
