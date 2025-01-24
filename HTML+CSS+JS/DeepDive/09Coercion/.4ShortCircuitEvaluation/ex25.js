// 단축 평가를 사용한 매개변수 기본값 설정
function getStringLength(str) {
  str = str || ''; // undefined이면 빈 문자열 대입
  return str.length;
}

var len1 = getStringLength(); // 0
var len2 = getStringLength('yeah'); // 4
console.log(len1, len2);

// ES6에서 매개변수 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

var len1 = getStringLength(); // 0
var len2 = getStringLength('yeah'); // 4
console.log(len1, len2);
