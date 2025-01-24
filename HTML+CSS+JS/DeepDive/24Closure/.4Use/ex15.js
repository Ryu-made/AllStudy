// 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
const counter = (function () {
  let counter = 0;

  // 함수를 인수로 전달받는 클로저를 반환
  return function (aux) {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
}());

// 보조 함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}
// 보조 함수를 전달하여 호출함
console.log(counter(increase)); // 1
console.log(counter(increase)); // 2
console.log(counter(increase)); // 3
// 자유 변수 counter를 공유한다.
console.log(counter(decrease)); // 2
console.log(counter(decrease)); // 1