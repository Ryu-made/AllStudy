// 함수 객체는 prototype 프로퍼티를 소유한다.
let bool = (function () { }).hasOwnProperty('prototype');
console.log(bool); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
bool = ({}).hasOwnProperty('prototype');
console.log(bool); // false
