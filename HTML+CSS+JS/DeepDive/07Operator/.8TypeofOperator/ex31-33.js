// 여러 값들의 타입
console.log(typeof NaN); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined (값과 타입 이름이 일치함)
console.log(typeof null); // object
console.log(typeof Symbol()); // symbol
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
console.log(typeof /abc/gi); // object
console.log(typeof function () { }); // function
console.log('='.repeat(30));

// typeof null == object
var nullvalue = null;
console.log(nullvalue === null); // true
console.log(typeof nullvalue === null, typeof nullvalue === 'object'); // false true
console.log('='.repeat(30));

// 선언하지 않은 식별자는 타입도 undefined이다.
console.log(typeof undeclared); // undefined
console.log({} == null, /*{} === null*/); // false, false