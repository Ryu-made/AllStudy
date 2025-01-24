var elem = null;
// null인 객체에 프로퍼티를 호출하면 기본적으로 에러를 발생시킨다.
// var val = elem.value; // Typerror: Cannot read properties of null
// console.log(val);

// 단축 평가를 통해 제어문을 쓰지 않고도 안전하게 프로퍼티를 불러올 수 있다.
var val = elem && elem.value;
console.log(val); // null