// 문자열 타입
var a = +'' // 0
var b = +'-0' // -0
var c = +'letter' // NaN
var d = +'4+6-2' // NaN
console.log(a, b, c, d)

// 불리언
var e = +true // 1
var f = +('a' > 'b') // 0
console.log(e, f)

// null
var g = +null // 0
console.log(g) // 0

// undefined
var h = +undefined // 0
console.log(h)

// Symbol 타입
//var j = +Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체, 기타 타입
var k = +{} // NaN
var l1 = +[] // 0 >> 객체 타입 중에 유일하게 숫자 값을 반환하는 것이 배열이다.
var l2 = +[4] // 4
var l3 = +[2, 3, 5, 7] // NaN
var m = +(function () { }) // NaN
console.log(k, l1, l2, l3, m)