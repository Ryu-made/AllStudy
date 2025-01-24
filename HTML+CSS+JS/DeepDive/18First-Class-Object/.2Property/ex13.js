// .6 prototype 프로퍼티
// prototype은 기본적으로 생성자 함수로 호출할 수 있는 constructor 객체만이 소유하고 있다.
// non-constructor 객체는 prototype 프로퍼티가 없다.
// 함수 객체는 prototype 프로퍼티를 소유한다. (?)
const foo = function () { };
function func() { }
console.log(foo.hasOwnProperty('propertype')); // false
console.log(func.hasOwnProperty('propertype')); // false

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
const obj = {};
console.log(obj.hasOwnProperty('prototype')); // false