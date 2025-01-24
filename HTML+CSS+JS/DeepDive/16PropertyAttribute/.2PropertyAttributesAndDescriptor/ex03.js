const person = {
  name: 'Eun'
};

// 프로퍼티 동적 생성
person.age = 20;
person.gender = 'Male';

/* 
  모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 
  프로퍼티 디스크립터 객체들을 반환한다.
*/
console.log(Object.getOwnPropertyDescriptors(person));
/*
각각의 프로퍼티 키에 대해 객체를 생성해 출력함. 
{
  name: {
    value: 'Eun',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { 
    value: 20, 
    writable: true, 
    enumerable: true, 
    configurable: true 
  },
  gender: {
    value: 'Male',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/