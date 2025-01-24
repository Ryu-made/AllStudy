/**
 * 클로저의 목적은 상태(state)를 안전하게 변경하고 유지하기 위해 사용한다.
 * 상태가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고 
 * (지정된) 특정 함수에게만 상태 변경을 허용한다.
 */

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  return ++num;
};

// 이러한 코드는 잘 작동하지만 오류를 발생시킬 가능성 때문에 
// 좋지 않은 코드로 평가한다.
console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

/* increase 함수가 올바르게 동작하려면 이러한 전제 조건이 필요하다.
 * 1. 카운트 상태는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
 * 2. 이를 위해 카운트 상태는 increase 함수만이 변경할 수 있어야 한다.
 */