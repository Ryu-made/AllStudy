// 함수 객체
function Foo() { }

// 프로토타입 메소드
// this를 참조하지 않는 프로토타입 메소드는 정적 메소드로 변경해도 동일한 효과를 얻는다.
Foo.prototype.x = function () {
  console.log('x');
};

// 프로토타입 메소드를 호출하려면 인스턴스를 먼저 생성해야 한다.
const foo = new Foo();
foo.x(); // 'x'

// 정적 메소드
Foo.y = function () {
  console.log('y');
};

// 정적 메소드는 인스턴스 생성 없이 호출한다.
Foo.y(); // 'y'