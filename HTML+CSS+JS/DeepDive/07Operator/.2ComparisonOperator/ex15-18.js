// (P.82) 비교 연산자의 주의할 값은 NaN이다. NaN은 유일하게 자기 자신과 일치하지 않는 값이다.
var nan1 = NaN === NaN, nan2 = NaN == NaN;
console.log(nan1, nan2); // false false
// 숫자 값이 NaN인지 조사하려면 Number.isNaN() 내장 메소드를 사용한다.
var isNaN1 = Number.isNaN(2), isNaN2 = Number.isNaN(NaN)
  , isNaN3 = Number.isNaN(5 + undefined * 2);
console.log(isNaN1, isNaN2, isNaN3); // false true true

// 0과 -0은 같은 값으로 판단한다.
var zero1 = 0 === -0, zero2 = 0 == -0;
console.log(zero1, zero2); // true true

// (P.83) Object.is() 는 ES6부터 도입된 메소드로 사람이 예측하는 결과를 반환한다.
// 그러나 아래 두 가지 경우를 제외하고는 모두 일치 연산자(===)와 동일하다.
var objis1 = Object.is(-0, +0), objis2 = Object.is(NaN, NaN);
console.log(objis1, objis2); // false true