// 자바스크립트가 제공하는 표준 빌트인 객체는 총 40여 개이다.
// Math, Reflect, JSON을 제외하고 모두 인스턴스 생성 가능한 생성자 함수 객체이다.
// 생성자 함수 객체가 아니라면 정적 메소드만 제공한다. (공통 메소드라 생각하면 쉽다)
// 다음은 String, Number, Boolean, Function 등의 생성자 함수로 객체를 생성하는 예시이다.

// String 생성자 함수
const strObj = new String('Song');
console.log(strObj, typeof strObj); // [String: 'Song'] object

// Number 생성자 함수
const numObj = new Number(123);
console.log(numObj, typeof numObj); // [Number: 123] object

// Boolean 생성자 함수
const boolObj = new Boolean(true);
console.log(boolObj, typeof boolObj); // [Boolean: true] object

// Function 생성자 함수에 의한 함수 객체
const func = new Function('x', 'return x * x;');
console.log(func, typeof func); // [Function: anonymous] function

// Array 생성자 함수에 의한 배열 객체
const arr = new Array(1, 2, 3, 5);
console.log(arr, typeof arr);  // [ 1, 2, 3, 5 ] object

// RegExp 생성자 함수에 의한 정규 표현식 객체
const regExp = new RegExp(/ab+c/i); //
console.log(regExp, typeof regExp); // /ab+c/i object

const date = new Date();
console.log(date, typeof date); // 2024-12-23T11:27:43.257Z object (date 값은 상시 바뀔 수 있음)

