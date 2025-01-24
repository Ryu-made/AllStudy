// exam 04-10
// 값의 선언과 할당의 순서를 바꾼 경우

console.log('unit:', unit); // unit: undefined [2]
unit = 20; // 할당 [3]
var unit; // 이후 선언 [1]
console.log('unit:', unit); // unit: 20 [4]
