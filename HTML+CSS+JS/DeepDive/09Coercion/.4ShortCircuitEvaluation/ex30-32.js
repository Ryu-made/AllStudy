// ES11(2020) 도입: null 병합 연산자 (nullish coalescing)

// 1. 이전 버전의 단축 평가
console.log('[단축 평가 방식]')
var ant = null ?? 'default string';
console.log(ant); // 'default string'

// >> 빈 문자열 값이나 0 값에 대해 원하지 않는 결과가 나올 수 있다.
var beat = '' || 0 || 'default string';
console.log(beat); // 'default string'

// 2. null 병합 연산자 적용
console.log('[null 병합 방식]');
var sun = undefined ?? 'sun';
console.log(sun); // 'sun'
var star = '' ?? 'star';
console.log(star); // ''
var moon = NaN ?? 'moon';
console.log(moon); // NaN