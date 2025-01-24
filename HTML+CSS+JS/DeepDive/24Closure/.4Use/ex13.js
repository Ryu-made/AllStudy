const Counter = (function () {
  // 카운트 상태 변수
  let num = 0;
  /*
   * 즉시 실행 함수에서 선언된 지역 변수 num은
   * 인스턴스의 프로퍼티가 아니다.
   * 그래서 즉시 실행 함수가 호출되고 소멸되는 시점에
   * 더 이상 num 식별자에 접근하지 못하게 된다.
   * 그러므로 private한 상태의 변수이다. 
   */
  function Counter() {
    // this.num = 0; 
    /* 생성자 함수에서 선언하는 프로퍼티는 공개(public)되어 있다.
     * 그래서 외부에서 인스턴스를 생성한 뒤에 
     * 얼마든지 자유롭게 프로퍼티에 접근하거나 값을 변경할 수 있다.
     * 그걸 사전에 방지하기 위해 클로저 함수로 선언하는 것이다.
     */
  }

  /* prototype을 통해 상속받는 메소드라도
   * 생성자 함수의 외부 렉시컬 환경 참조를 통해
   * 식별자 num에 접근이 가능하다.
   */
  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
}());

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.increase()); // 3
console.log(counter.decrease()); // 2
console.log(counter.decrease()); // 1