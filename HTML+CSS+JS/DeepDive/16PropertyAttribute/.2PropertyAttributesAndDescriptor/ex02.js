const person = {
  name: 'Song'
};

/*
  프로퍼티 어트리뷰터 정보를 제공하는 
  프로퍼티 디스크립터 객체를 반환한다.
*/
console.log(Object.getOwnPropertyDescriptor(person, 'name')); // { value: 'Song', writable: true, enumerable: true, configurable: true }