// 모듈 패턴 사용 (클로저 기반)
// 모듈 패턴은 반환할 객체의 프로퍼티를 메소드 등으로 추가해서
// 하나의 즉시 실행 함수로 감싼다.
// 전역 오염 방지와 정보 은닉에 유용하다.
var Counter = (function () {
  // private 변수 지정
  var num = 0;

  // 외부로 공개(public)할 데이터, 메소드를 프로퍼티로 추가
  // 객체를 반환
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  };
}());
// return할 객체에 포함되지 않는 변수는 외부에 호출하지 못한다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.increase()); // 3
console.log(Counter.decrease()); // 2
console.log(Counter.decrease()); // 1