// 클로저를 활용하는 간단한 예제

/* 함수를 인수로 전달받고(aux), 함수를 반환하는 고차 함수
 * 카운트 상태를 유지하기 위해 자유 변수 counter를 기억하는 클로저를 반환
 */
function makeCounter(aux) {
  let counter = 0;

  return function () {
    counter = aux(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

// 함수를 생성하는 함수
// makeCounter에 보조 함수를 인수로 전달받아 함수를 반환
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2
console.log(increaser()); // 3
// increaser과는 독립된 렉시컬 환경을 가지기 때문에
// 카운터 상태를 연동하지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

/* 카운터 상태를 연동하는 함수를 구현하려면
 * 렉시컬 환경을 똑같이 공유하는 클로저를 만들어야 한다.
 * 그걸 위해서 makeCounter 함수를 두 번 호출하지 말아야 한다.
 */ 