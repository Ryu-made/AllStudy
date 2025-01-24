// this를 명시적으로 바인딩하는 방법 2
var value = 2;

const obj = {
  value: 200,
  foo() {
    // 콜백 함수에 명시적으로 this를 바인딩한다. (Funtion.prototype.bind)
    setTimeout(function () {
      console.log(this.value); // 200
    }.bind(this), 100);
  }
};

obj.foo();