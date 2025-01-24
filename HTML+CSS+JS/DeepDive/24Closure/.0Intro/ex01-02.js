/**
 * 클로저는 자바스크립트의 난해한 개념 중 하나이지만
 * 하스켈, 리스프, 스칼라 등 몇몇 프로그래밍 언어에서 공통적으로 사용하는 개념이다.
 * ECMAScript 사양에는 등장하지 않으며
 * MDN에서는 클로저에 대해 다음과 같은 정의가 있다.
 *  "클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다."
 * 여기서 먼저 이해해야 할 핵심 키워드는 '함수가 선언된 렉시컬 환경'이다.
 */

// ex01
const x = 1;

function outerA() {
  const x = 10;
  // 중첩 함수 innerA
  function innerA() {
    // 중첩 함수의 상위 스코프는 외부 함수인 outerA의 스코프이다.
    // innerA에서 접근한 식별자 x는 outerA에 선언된 변수이다.
    console.log(x); // 10
  }

  innerA();
}

outerA();

// ex02
const y = 2;

function outerB() {
  const y = 20;

  innerB();
}

function innerB() {
  // innerB는 outerB의 중첩 함수가 아니기 때문에
  // outerB에 선언된 식별자 y에 접근할 수 없다.
  // 대신 전역에 선언된 식별자 y에 접근하여 값 연산을 수행한다.
  console.log(y); // 2
}

outerB();
// 자바스크립트는 렉시컬 스코프를 따르기 때문에 이러한 현상이 발생한다.