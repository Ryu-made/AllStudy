/* 
strict mode와 일반적인 모드(non-strict mode)의 스코프를 혼용하는 것은 오류를 발생시킬 가능성이 높다.
외부 서드파티 라이브러리를 사용하는 경우에는 특히 라이브러리가 non-strict mode일 때 전역에 strict mode를 적용했다면 문제가 발생한다.
가장 좋은 대안은 즉시 실행 함수로 strict mode인 스크립트 전체를 감싸서 명확하게 스코프를 구분하는 방법이다. (전역은 non-strict mode로 두는 것이 좋기 때문이다.)
*/

// 즉시실행 함수의 선두에 strict mode를 적용한 예
(function () {
  // 선언 위치가 항상 블록 선두인 것을 잊지 않기
  'use strict';
  // 이후 실행코드 작성..
  let x = 1;
  let y = x + 5;
  console.log(y); // 6
}());

z = 20; // 전역에는 non-strict mode이기 때문에 잠재적 위험도가 높아질 수 있다.