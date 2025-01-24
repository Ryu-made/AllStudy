var count = 0;

// 순수 함수는 동일한 인수가 매개변수로 전달되면 동일한 값을 반환한다.
var increase = function (n) {
  return ++n;
};
// 순수 함수의 반환값을 변수에 재할당한다.
count = increase(count);
console.log(count); // 1
count = increase(count);
console.log(count); // 2
// 외부의 변수에 값을 할당하지 않는 이상 외부에 영향을 주지 않는다.
increase(count);
console.log(count); // 2

count = 0;
// 비순수 함수는 외부 상태에 의존하여 값이 변환될 수 있다.
increase = function () {
  return ++count;
}

// 매개변수가 아닌 외부 변수를 직접 참조하기 때문에
// 상태변화를 추적하기 어렵다.
increase();
console.log(count); // 1
increase();
console.log(count); // 2