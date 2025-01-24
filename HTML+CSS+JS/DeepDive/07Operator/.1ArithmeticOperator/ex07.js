// + 의 문자열(그 외 모든 타입) 연결 예시
// 1. 문자열로 파싱된 숫자
console.log('1' + 2); // 3
console.log(2 + '3'); // 5
console.log(3 + 5); // 8

// 2. 불리언, null 값
console.log(1 + true); // 2 (true -> 1)
console.log(1 + false); // 1 (false -> 0)
console.log(1 + null); // 1 (null -> 0)

// 3. 객체, 배열 (배열은 문자열로 연결됨)
console.log(2 + { 1: 'one' }); // 2[object Object] (object -> [object Object])
console.log(3 + [2, 4, 6]); // 32,4,6 (array -> '2,4,6')
console.log([1, 4, 7] + [5, 8]); // 1,4,75,8

// 4. undefined
console.log(4 + undefined); // NaN