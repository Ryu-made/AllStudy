// ES11(2020) 도입: 옵셔널 체이닝 연산자 (optional chaining)
// 옵셔널 체이닝은 좌항 값이 null, undefined이면 undefined를 반환하고, 
// 그 외에는(NaN, 0, false 등 포함) 모두 우항의 참조를 반환한다.
// 1. 이전 버전의 단축 평가
console.log('[단축 평가 방식]');
// null 값인 객체 평가: null
var elem = null;
var val = elem && elem.value; // null
console.log(`elem.value: ${val}`);

// 빈 문자열 평가: ''
var str = '';
var len = str && str.length; // '' (빈 문자열은 Falsy 값이라서 .length 참조 불가)
console.log(`str.length: ${len}`);

// 2. 옵셔널 체이닝 연산자 적용
console.log('[옵셔널 체이닝 방식]');
// null 값인 객체 평가: undefined
var elem = null;
var val = elem?.value; // undefined
console.log(`elem.value: ${val}`);

// 빈 문자열 평가: length 프로퍼티 적용 가능
var str = '';
var len = str?.length; // 0
console.log(`str.length: ${len}`);
