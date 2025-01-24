// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티이다.
// (Nodejs 환경에서는 전역 객체의 프로퍼티가 아니다.)
var value = 1;
// const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 2;

const obj = {
  value: 100,
  foo() {
    console.log(`foo's this: ${this}`); // foo's this: [object Object]
    console.log(`foo's this.value: ${this.value}`); // foo's this.value: 100

    // 메소드 내의 중첩 함수
    function bar() {
      console.log(`bar's this: ${this}`); // bar's this: [object global]
      console.log(`bar's this.value: ${this.value}`); // bar's this.value: undefined
    }
    bar();
  }

};

obj.foo();