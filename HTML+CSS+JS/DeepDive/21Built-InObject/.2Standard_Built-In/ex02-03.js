// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Word');
// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); // Number {1.5}

// toFixed는 Number.prototype의 프로토타입 메소드다.
// Number.prototype.toFixed는 소수점 자리를 '정수로 반올림'하여 '문자열로 반환'한다.
console.log(numObj.toFixed()); // 2

// isInteger는 Number의 정적 메소드다.
// Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInteger(numObj)); // false