const Person = 'person';

{
  console.log(Person); // ReferenceError: Cannot access 'Person' before initialization

  class Person { }
}
/** 
 * 이러한 상황이 생기는 걸 '일시적 사각지대(TDZ)에 빠진다'고 한다. 
 * class를 비롯한 var, const, let, function, function* 키워드를 사용한 모든 식별자는
 * 호이스팅이 발생한다. 선언문은 런타임 이전에 실행되기 때문이다.
*/