// 암묵적 전역(Implicit Global)의 대표적인 예이다.
function foo() {
  x = 10;
}
foo();

/* 
전역 스코프에 변수 x를 선언한 것 같지 않아도 함수 foo 안에서 암묵적 전역이 이루어져
변수 x에 할당된 값이 함수레벨 스코프 외부에서도 정상적으로 출력된다.
이런 '개발자가 의도치 않은' 문제를 해결하기 위해서 strict mode라는 엄격한 모드가 추가되었다. strict mode는 ES5 버전부터 지원한다. 만일 코딩 형식을 커스텀을 지정하고
문법을 좀 더 강제하고 싶다면 ESLint가 더 효과적이다.(추가 설치가 필요하다.)
*/
console.log(x); // 10