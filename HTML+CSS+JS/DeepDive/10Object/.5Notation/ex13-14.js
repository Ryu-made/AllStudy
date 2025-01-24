var daughter = {
  name: 'Seyeon',
  age: 14
};
// 대괄호 표기법은 프로퍼티 키를 따옴표로 감싸지 않으면 에러가 발생한다.
console.log(daughter[name]); // ReferenceError: name is not defined

// 객체에 존재하지 않은 프로퍼티의 키를 찾으면 undefined를 반환한다. (에러X)
console.log(daughter['favor']); // undefined
// (어쩌면 프로퍼티 자체도 하나의 변수처럼 취급될 수 있는 거같다...)
