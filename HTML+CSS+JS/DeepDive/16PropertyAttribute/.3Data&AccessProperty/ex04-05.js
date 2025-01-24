const person = {
  name: 'Hong'
};
/* 
Object.getOwnPropertyDescriptor 메소드가 반환한 값들 중에
value 프로퍼티의 값은 어트리뷰트 [[Value]]의 값을 나타낸다.
그러므로 value 값은 'Hong'이다.
writable, enumerable, configurable 프로퍼티의 값은 모두 true로
[[Writable]], [[Enumerable]], [[Configurable]] 어트리뷰트의 값이 모두 true인 것과 같다.
코드로 객체의 프로퍼티가 생성될 때는 [[Value]] 값이 프로퍼티에 할당된 값으로 초기화되며,
나머지 [[Writable]], [[Enumerable]], [[Configurable]]의 값이 true로 초기화된다.
*/
console.log(Object.getOwnPropertyDescriptor(person, 'name')); // { value: 'Hong', writable: true, enumerable: true, configurable: true }
/* 
이후 프로퍼티를 동적으로 추가해도 똑같이 초기화 된다.
그래서 각각의 프로퍼티에 대해 객체로 생성해 출력하는 것이다.
*/
person.nation = 'Korea';
person.age = 32;

console.log(Object.getOwnPropertyDescriptors(person));
/* 
{
  name: {
    value: 'Hong',
    writable: true,
    enumerable: true,
    configurable: true
  },
  nation: {
    value: 'Korea',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { 
    value: 32, 
    writable: true, 
    enumerable: true, 
    configurable: true 
  }
}
*/