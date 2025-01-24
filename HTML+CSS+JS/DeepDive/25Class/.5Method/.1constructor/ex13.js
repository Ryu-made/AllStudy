class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

const me = new Person('Song');
console.log(me); // Person { name: 'Song' }

/**
 * - 클래스의 constructor에서 this에 추가된 name 프로퍼티가
 * 클래스에 의해 생성된 인스턴스의 프로퍼티로 추가된다.
 * - 이는 생성자 함수도 동일하게 작동한다.
 * 
 * // 생성된 인스턴스의 구조(파이어폭스 브라우저)
 * Object { name: "Song" }
 * name: "Song"
 * <prototype>: Object { … }
 * constructor: class Person { constructor(name) }
 * <prototype>: Object { … }
 * __defineGetter__: function __defineGetter__()
 * __defineSetter__: function __defineSetter__()
 * __lookupGetter__: function __lookupGetter__()
 * __lookupSetter__: function __lookupSetter__()
 * __proto__: 
 * constructor: function Object()
 * hasOwnProperty: function hasOwnProperty()
 * isPrototypeOf: function isPrototypeOf()
 * propertyIsEnumerable: function propertyIsEnumerable()
 * toLocaleString: function toLocaleString()
 * toString: function toString()
 * valueOf: function valueOf()
 * <get __proto__()>: function __proto__()
 * <set __proto__()>: function __proto__()
 */
