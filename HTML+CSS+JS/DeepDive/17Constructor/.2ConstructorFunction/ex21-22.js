// new 연산자 없이 호출된 생성자 함수라도 빌트인 함수면 
// new 연산자와 함께 호출했을 때와 동일하게 동작한다.
let obj = new Object();
console.log(obj); // {}
obj = Object();
console.log(obj); // {}

let f = new Function('x', 'return x ** 2');
console.log(f); // [Function: anonymous]
f = Function('x', 'return x ** 2');
console.log(f); // [Function: anonymous]

// String, Number, Boolean 등은 타입 변환 용도로도 쓰이기 때문에
// new 연산자가 없으면 해당 타입의 원시 값을 반환한다.
// (기본적으로는 객체 생성 후 반환함)
let str = String(123);
console.log(str, typeof str); // 123 string

let num = Number('123');
console.log(num, typeof num); // 123 number

str = new String(123);
console.log(str, typeof str); // [String: '123'] object

num = new Number('123');
console.log(num, typeof num); // [Number: 123] object
