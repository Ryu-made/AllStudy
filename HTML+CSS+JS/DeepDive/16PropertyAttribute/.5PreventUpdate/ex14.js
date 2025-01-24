/*
  객체의 중첩 객체까지 모두 동결해서 불변 객체를 구현하려면
  객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 함수를 호출한다.
*/
const deepFreeze = function (target) {
  // 객체(object)가 아니거나, 이미 동결된 객체는 무시하고, 동결되지 않은 객체를 동결한다.
  const isObj = target && typeof target === 'object';
  const isFrozen = isObj && !Object.isFrozen(target);
  if (isFrozen) {
    Object.freeze(target);
  }
  if (isObj) {
    /* 
    모든 프로퍼티를 순회하여 재귀적으로 동결하는 방법
    1) Object.keys 메소드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환
    2) forEach 메소드는 배열을 순회하여 각 요소에 대하여 콜백 함수를 실행
    */
    Object.keys(target).forEach(key => deepFreeze(target[key]));
  }
  return target;
};

const person = {
  name: {
    firstName: 'Sanghyeok',
    lastName: 'Lee'
  },
  address: {
    nation: 'Korea',
    city: 'Seoul'
  },
  age: 29
}
// 객체의 얕은 동결

Object.freeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.name)); // false
console.log(Object.isFrozen(person.address)); // false

// 객체의 깊은 동결
deepFreeze(person);
console.log(Object.isFrozen(person)); // true
// 중첩 객체들까지 동결한다.
console.log(Object.isFrozen(person.name)); // true
console.log(Object.isFrozen(person.address)); // true

// 객체 값이 갱신되지 않는다.
person.address.city = 'Busan'; // strict mode에서 예외 발생
console.log('address:', person.address); // address: { nation: 'Korea', city: 'Seoul' }
