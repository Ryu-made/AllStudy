/** 기명 클래스 표현식은 함수 표현식과 동일한 에러가 발생한다. 
 * 식별자를 이용하지 않고 표현식의 클래스 이름으로 
 * 외부에서 인스턴스를 생성하면 에러가 발생한다.
*/

// 기명 클래스 표현식
const Person = class MyClass { };

// 에러 발생
const me = new MyClass(); // ReferenceError: MyClass is not defined
console.log(MyClass); // ReferenceError: MyClass is not defined