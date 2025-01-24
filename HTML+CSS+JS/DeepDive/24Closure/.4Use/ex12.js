// 전역 변수 식별자
let num = 5;

// 여러 개 함수를 객체로 반환하기
const counter = (function () {
  // 카운터 상태 변수
  let num = 0;
  // 클로저 메소드를 갖는 객체를 반환한다.
  // 객체 리터럴은 스코프를 만들지 않는다.
  // 반환할 객체 아래 메소드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
  return {
    // increase, decrease 메소드는 상위 스코프의 렉시컬 환경에 따라
    // 호출될 때 항상 즉시 실행 함수의 스코프의 식별자를 참조할 수 있다.
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0; // 최솟값 0
    }
  };
}());

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.increase()); // 3
console.log(counter.decrease()); // 2
console.log(counter.decrease()); // 1
// 구분선
console.log('='.repeat(5));
// 전역 변수의 값은 바뀌지 않음
console.log(num); // 5