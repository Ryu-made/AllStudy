const person = {
  // 데이터 프로퍼티
  firstName: 'SooHyun',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 '접근자 프로퍼티'이다.
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter
  set fullName(name) {
    // 배열 디스트럭처링 할당 (31.1 [배열 디스트럭처링 할당] 참고)
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`); 'SooHyun Lee'

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티인 fullName에 값을 저장해 setter 함수를 호출한다.
person.fullName = 'ChanHyeok Lee';
// fullName에 저장된 값이 firstName과 lastName에 적절히 분배된 상태이다.
console.log(person); // { firstName: 'ChanHyeok', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티인 fullName에 접근해 getter 함수를 호출한다.
// firstName과 lastName을 문자열 연결로 합친 형태와 같다.
console.log(person.fullName); // 'ChanHyeok Lee'

// firstName, lastName은 데이터 프로퍼티이다.
// 데이터 프로퍼티: [[Value]], [[Writable]], ..
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// {value: 'ChanHyeok', writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티이다.
// 접근자 프로퍼티: [[Get]], [[Set]], ..
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
/* 
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
}
*/