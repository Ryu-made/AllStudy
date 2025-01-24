// 숫자형으로 명시적 타입 변환
// 1. Number 생성자 함수 (new 없이)
console.log(Number('20')) // 20
console.log(Number('-12')) // -12
console.log(Number('-2.87')) // -2.87
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number([])) // 0
console.log(Number([5])) // 5
console.log(Number({})) // NaN
console.log('='.repeat(10), '\n')

// 2. parseInt, parseFloat 함수 사용 (문자열만)
console.log(parseInt('023')) // 23
console.log(parseInt('-91')) // -91
console.log(parseFloat('-1.423')) // -1.423
console.log('='.repeat(10), '\n')

// 3. +, * 산술 연산자 사용
console.log(+'24') // 24
console.log(+'-4') // -4
console.log(+'-10.9') // -10.9
console.log(+true) // 1
console.log(+false) // 0
console.log(+'true') // NaN
console.log(+[28]) // 28
console.log(Infinity * 1) // Infinity
console.log('40' * 1) // 40
console.log([] * 1) // 0
console.log(null * 1) // 0
console.log('='.repeat(10), '\n')
