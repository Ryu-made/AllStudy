// 7번째 원시타입인 Symbol은 유일무이한 값(=심벌 값)을 key로 생성한다.
// 리터럴을 사용하지 않고 Symbol() 함수를 호출해 생성한다.
var key = Symbol('key of symbol');
console.log(key, typeof key); // Symbol(key of symbol) symbol
// Symbol 값은 외부에 노출되지 않는다.

var obj = {};
obj[key] = 'value of symbol';
console.log(obj[key]); // value of symbol