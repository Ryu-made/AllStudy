// .4 Function.prototype의 메소드들의 인한 간접 호출
/** 
 * Function.prototype.apply:
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수 호출
 * @param thisArg - this로 사용할 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns - 호출된 함수의 반환값
 * 
 * Function.prototype.apply(thisArg[, argsArray])
 * 
 * Function.prototype.call:
 * 주어진 this 바인딩과 ,로 구분된 인수 리스트를 사용하여 함수 호출
 * @param thisArg - this로 사용할 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns - 호출된 함수의 반환값
 * 
 * Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
 */

function getThisBinding() {
  return this;
}
// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // <ref *1> Object [global] { ... }

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 
// getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // { a: 1 }
console.log(getThisBinding.call(thisArg)); // { a: 1 }