var obj = {}; // 빈 객체
var key = 'new key'; // 키로 지정할 문자열 값

// ES5 도입: 프로퍼티 키 동적 생성
// 키 생성 방법: obj[...]의 대괄호에 key 값을 넣고 value 값을 대입
obj[key] = 'new value';

console.log(obj); // { 'new key': 'new value' }