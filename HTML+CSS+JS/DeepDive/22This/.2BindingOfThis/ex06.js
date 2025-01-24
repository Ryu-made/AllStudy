// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// 렉시컬 스코프는 함수 객체가 생성되는 시점에 상위 스코프를 결정한다는 점이 this와 다르다.

const foo = function () {
  console.dir(this);
};

/** 동일한 함수도 다양한 방식으로 호출할 수 있다.
 * 1. 일반 함수 호출
 * 2. 메소드 호출
 * 3. 생성자 함수 호출
 * 4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
 */

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
foo(); // window|global -> globalThis

// 2. 메소드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메소드를 호출한 객체 obj(혹은 object)를 가리킨다.
const obj = { foo };
obj.foo(); // { foo: [Function: foo] } -> object

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {} -> constructor foo

// 4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: 'bar' };

foo.call(bar); // { name: 'bar' }
foo.apply(bar); // { name: 'bar' }
foo.bind(bar)(); // { name: 'bar' }