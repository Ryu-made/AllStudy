const x = 1;

// 1) outerC 함수 선언하기
function outerC() {
  const x = 10;
  // 2) 중첩 함수인 innerC를 생성하고 반환한다.
  const innerC = function () { console.log(x) };
  return innerC;
}

// 3) 함수 outerC 호출 및 함수 innerC를 반환,
// 이 시점에 함수 outerC와 지역 변수 x는 생명 주기가 종료된다.
const innerFunc = outerC();
// 4) 그러나 반환 객체인 innerFunc에 저장된 함수 innerC는 
// outerC 생명 주기와 상관 없이 지역 변수 x를 사용하고 있다.
// 이러한 중첩 함수의 호출 방식을 클로저(Closure)라고 부른다.
innerFunc(); // 10