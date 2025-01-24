// eval 함수

// 1. 자체 출력문
// 1개의 문일 때
eval('console.log(1 + 2);'); // 3
// 여러 개의 문일 때
eval('var x = 7; console.log(x + 3);') // 10

// 2. 변수에 반환하는 문
// 표현식일 경우(값이 존재)
let res = eval('3 + 6 - 4;');
console.log(res); // 5
// 표현식이 아닌 경우(값이 없음)
res = eval('var y = 4;');
console.log(res); // undefined
// 다만, eval 함수에 의해 선언된 변수는 런타임에 호출 가능하다.
console.log(y); // 4

// 객체 리터럴의 경우 반드시 소괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); // { a: 1 }

// 함수 리터럴의 경우 반드시 소괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); // 1

// 여러 표현식이 문자열 코드로 이루어져 있다면 마지막 결과값이 반환된다.
res = eval('1 + 2; 3 + 4; 7 - 5;');
console.log(res); // 2 *(7 - 5 = 2 가 반환됨)