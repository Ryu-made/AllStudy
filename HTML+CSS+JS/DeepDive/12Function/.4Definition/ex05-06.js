// 함수 선언하기
function add(x, y) {
  return x + y;
}

// 함수 참조하기
// console.dir은 함수 객체 프로퍼티를 출력하는 메소드이다.
// Node.js 환경에서는 console.log와 출력 결과가 같다.
console.dir(add); // Node.js: [Function: add]
/*Firefox: function add(x, y)
  arguments: null
  caller: null 
  ...
*/
// 함수 호출하기
console.log(add(3, 7));

// 함수 이름이 없는 함수 선언은 X
/*
function (x, y) {
  return x + y;
}
*/