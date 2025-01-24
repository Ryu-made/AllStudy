// isFinite: 
// 인수가 숫자 타입의 유한수인지 검사한다. (문자열은 숫자로 암묵적 타입 변환)
// - 유한수이면 true, 무한수이면 false를 반환
// - 인수가 NaN 값이라면 false를 반환

// 인수가 유한수인 경우(true)
console.log(`${0}, ${isFinite(0)} 
${2e64}, ${isFinite(2e64)}
${'12.45'}, ${isFinite('12.45')}
${null}, ${isFinite(null)}`);
/* 
0, true 
2e+64, true
12.45, true
null, true
*/

// 인수가 무한수 또는 NaN인 경우(false)
console.log(`${Infinity}, ${isFinite(Infinity)} 
${-Infinity}, ${isFinite(-Infinity)}
${NaN}, ${isFinite(NaN)}
${'Str'}, ${isFinite('Str')}
${'2001/01/01'}, ${isFinite('2001/01/01')}`);
/*
Infinity, false 
-Infinity, false
NaN, false
Str, false
2001/01/01, false
*/