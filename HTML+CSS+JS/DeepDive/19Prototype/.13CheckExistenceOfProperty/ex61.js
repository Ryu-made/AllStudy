const person = { name: 'Kang' };
// ES6부터 도입된 Reflect.has 메소드도 in 연산자와 동일하게 동작한다.
console.log(Reflect.has(person, 'name')); // true
console.log(Reflect.has(person, 'hasOwnProperty')); // true

