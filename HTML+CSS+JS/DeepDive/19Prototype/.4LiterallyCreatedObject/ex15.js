// 생성자 함수에 의해 생성된 인스턴스는 프로토타입의 constructor 프로퍼티에 의해 
// 직접 본인을 생성한 함수와 연결된다. 

// obj 객체를 생성한 생성자 함수는 Object다.
const obj = new Object();
console.log(obj, obj.constructor === Object); // {} true

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a', 'b', 'return a + b;');
console.log(add, add.constructor == Function); // [Function: anonymous] true

// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Ryu');
console.log(me, me.constructor === Person); // Person { name: 'Ryu' } true