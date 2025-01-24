// arguments: 함수 선언문 내부에서 call의 인수로 담을 유사 배열 객체
// Array.prototype.slice.call: 배열 객체의 slice 메소드를 호출 
function convertArgsToArray() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }

  // arguments 객체를 배열로 전환
  // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3); // [ 1, 2, 3 ]