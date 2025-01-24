// 객체 리터럴로 객체 생성하기
var person = {
  name: 'Ryu-Daehyun', // 프로퍼티의 문자열 값
  greeting: function () {
    console.log(`Hello, my name is ${this.name}.`)
  } // 프로퍼티의 함수 값(함수: 일급 객체)
};

// 객체의 콘솔 출력 방식
console.log(typeof person); // object
// 브라우저 엔진이나 콘솔 환경에 따라 출력 결과는 다를 수 있다.
console.log(person); // { name: 'Ryu-Daehyun', greeting: [Function: greeting] }
person.greeting(); // 'Hello, my name is Ryu-Daehyun.'