// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태 변수
  let num = 0;

  return ++num;
};

// num 변수를 지역 변수로 바꾸어 보니 
// 이전 상태를 유지하지 못하는 상황이 발생한다.
console.log(increase()); // 1
console.log(increase()); // 1
console.log(increase()); // 1