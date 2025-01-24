/* 
  일급 객체: 다른 객체들에 일반적으로 적용 가능한 연산 모두 지원하는 객체
  + 일급 객체의 조건:
  1. '무명의 리터럴'로 생성할 수 있다. (=런타임 생성 가능)
  2. 변수나 '자료구조(객체, 배열 등)에 저장'할 수 있다.
  3. 함수의 '매개변수에 전달'할 수 있다.
  4. '함수의 반환값'으로 사용할 수 있다.
*/

// 자바스크립트의 함수는 일급 객체의 조건을 만족한다.
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2-1. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function (num) { // 변수에 저장한 함수이다.
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2-2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease }; // 변수에 담긴 함수 객체를 객체 안에 넣는다.

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () { // 함수 자체가 리턴 값이다.
    num = aux(num); // 매개변수가 함수로 사용되었다.
    return num;
  };
}

// 3. 함수는 매개변수에 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2