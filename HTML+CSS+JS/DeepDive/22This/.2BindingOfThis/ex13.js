// this를 명시적으로 바인딩하는 방법 3
var value = 3;

const obj = {
  value: 300,
  foo() {
    // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100); // 300
  }
};

obj.foo();