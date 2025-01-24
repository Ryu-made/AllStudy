// 문자열로 명시적 타입 변환
// 1. String 생성자 함수 (new 없이)
console.log(String(NaN))
console.log(String(123))
console.log(String(false))
console.log('='.repeat(10), '\n')

// 2. Object.prototype.toString 메소드 (.prototype 속성은 나중에 자세히 배움)
console.log(NaN.toString())
console.log((234).toString())
console.log(-Infinity.toString())
console.log(true.toString())
console.log('='.repeat(10), '\n')

// 3. 문자열 연결 연산자
console.log(NaN + '')
console.log(345 + '')
console.log(false + '')