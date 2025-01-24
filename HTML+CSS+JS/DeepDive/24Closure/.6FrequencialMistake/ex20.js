// 클로저에 자주 발생하는 실수 예시
var fs = [];

for (var i = 0; i < 3; i++) {
  fs[i] = function () { return i; }; // 배열에 함수 객체 저장
}

// 배열의 요소는 함수이다.
console.log(typeof fs[0]);

// 함수 배열을 차례로 실행하면 전역 변수 i에 마지막으로 할당된 값(3)이
// 똑같이 출력된다.
for (var j = 0; j < fs.length; j++) {
  console.log(fs[j]()); // 3 3 3
}

