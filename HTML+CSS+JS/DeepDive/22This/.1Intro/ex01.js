// circle 객체 선언
const circle = {
  // 프로퍼티: 객체 고유의 '상태' 데이터
  radius: 5,
  // 메소드: 상태 데이터를 참조하고 조작하는 '동작'
  getDiameter() {
    // 이 메소드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면
    // 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
    return 2 * circle.radius;
  }
};

// getDiameter 메소드에 참조된 객체인 circle은 
// 변수인 식별자 circle에 할당되기 직전에 평가되어
// getDiameter 메소드 내부에서 사용될 수 있게 된다.
console.log(circle.getDiameter()); // 10