// 4. 불변 객체의 정의
const person = {
  name: 'Chanhyeok Lee',
  address: {
    city: 'Busan',
    nation: 'Korea'
  }
};
// person 객체 동결
Object.freeze(person);

// 직속 프로퍼티는 동결해도 중첩 객체까지 동결하지 못한다.
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // false

// 중첩 객체의 값 갱신, 삭제 등이 잘 반영된다.
person.address.city = 'KangLeung';
delete person.address.nation;
console.log(person); // { name: 'Chanhyeok Lee', address: { city: 'KangLeung' } }

