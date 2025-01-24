var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log(`foo's this: ${this}`); // foo's this: [object Object]

    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log(`callback's this: ${this}`);
      // callback's this: 5 (?)
      console.log(`callback's this.value: ${this.value}`);
      // callback's this.value: undefined
    }, 100);
  }
};

obj.foo();
// 중첩/콜백 함수 등도 일반 함수로 호출되면 함수 내부의 this에
// 전역 객체가 바인딩된다. (Nodejs 환경에서는 좀 다른 거 같다.)
// 이러한 특성 때문에 콜백 함수가 상위 함수의 헬퍼 함수로 동작하기 어렵게 된다.