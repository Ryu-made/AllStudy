class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

console.log(typeof Person); // function
console.dir(Person); // [class Person]
/** 
 * - 클래스가 평가될 때는 함수 객체가 된다.
 * - 생성자 함수와 같이 constructor 프로퍼티는 
 * 인스턴스를 가리키는 클래스 자신을 가리킨다.
 * 
 * // 클래스의 구조(파이어폭스 브라우저)
 * class Person { constructor(name) }
 * length: 1
 * name: "Person"
 * prototype: Object { … }
 * constructor: class Person { constructor(name) }
 * <prototype>: Object { … }
 * <prototype>: function ()
 * apply: function apply()
 * arguments: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 * bind: function bind()
 * call: function call()
 * caller: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 * constructor: function Function()
 * length: 0
 * name: ""
 * toString: function toString()
 * Symbol(Symbol.hasInstance): function Symbol.hasInstance()
 * <get arguments()>: function arguments()
 * <set arguments()>: function arguments()
 * <get caller()>: function caller()
 * <set caller()>: function caller()
 * <prototype>: Object { … }
 */