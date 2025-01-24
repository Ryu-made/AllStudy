// 문자열은 유사 배열 객체이다.

var str = 'letter';

console.log(str[3]); // 't'
console.log(str.length); // 6
console.log(str.toUpperCase()); // 'LETTER'

// 문자열 값은 불변값(Immutable Value)이다.
str[1] = 'E';
// 그러므로 각 문자에 접근해도 에러가 발생하지도 않고 변경되지도 않는다.
console.log(str); // 'letter' ('lEtter'가 아님)
