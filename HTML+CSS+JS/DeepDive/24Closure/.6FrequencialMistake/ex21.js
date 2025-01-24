// ex20을 올바르게 동작하도록 만든 예시

var fs = [];

for (var i = 0; i < 3; i++) {
  fs[i] = (function (id) {
    // 배열에 즉시 실행 함수가 반환하는 클로저를 할당한다.
    return function () {
      // 상위 스코프인 즉시 실행 함수의 매개변수인 id가 
      // 클로저에서는 자유 변수로 사용된다.
      // 그럼 전역 변수 i 값이 아닌 
      // 외부 렉시컬 환경 참조로 기억하는 지역 변수 id 값이 출력된다.
      return id;
    };
  }(i));
}

for (var j = 0; j < fs.length; j++) {
  console.log(fs[j]()); // 0 1 2
}