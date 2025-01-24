/* 
객체지향 프로그래밍은 실세계의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도이다.
실체는 성질을 나타내는 '속성(property/attribute)'을 가지고 있다. 이를 통해 실체를 인식하거나 구별할 수 있다.

구현하고자 하는 프로그램에서 실체에게 필요로 하는 특정 속성만 간추려서 표현하는 방식이 '추상화(abstraction)'이다.
*/

// "이름"과 "주소" 속성을 같는 person 객체 예시
const person = {
  name: 'Song',
  address: 'Daeyeon-dong Nam-gu Busan'
}
console.log(person); // { name: 'Song', address: 'Daeyeon-dong Nam-gu Busan' }
