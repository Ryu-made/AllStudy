// 명시적인 반환값 (원시, 객체 타입 비교)
function Circle(radius) {
  // 1. 암묵적으로 인스턴스(빈 객체)가 생성되고 this에 바인딩된다.
  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 원래는 암묵적으로 this를 반환하지만, 
  // 명시적으로 객체 반환시 this를 무시하고 명시한 객체를 반환한다.
  // 반면에 명시적으로 원시 값 반환시 그 값을 무시하고 this를 반환한다.
  // return { some_prop: 'some values' };
  return 250;
}

const circle1 = new Circle(1); // 1은 반지름(radius)
console.log(circle1);
// 명시적 객체 반환값: { some_prop: 'some values' }
// 명시적 원시 반환값: Circle { radius: 1, getDiameter: [Function (anonymous)] }
const circle2 = new Circle(2); // 2는 반지름(radius)
console.log(circle2);
// 명시적 객체 반환값: { some_prop: 'some values' }
// 명시적 원시 반환값: Circle { radius: 2, getDiameter: [Function (anonymous)] }