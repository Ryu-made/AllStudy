class Person { }

// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}

// new 연산자 없이 클래스를 호출하면 오류 발생
const you = Person(); // TypeError: Class constructor Person cannot be invoked without 'new'