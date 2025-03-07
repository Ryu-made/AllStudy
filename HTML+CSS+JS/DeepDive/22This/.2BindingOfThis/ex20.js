function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 
// getThisBinding 함수의 this에 바인딩한다.

// apply 메소드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
/* 
[Arguments] { '0': 1, '1': 2, '2': 3 }
{ a: 1 }
*/

// call 메소드는 호출할 함수의 인수를 
// 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
/* 
[Arguments] { '0': 1, '1': 2, '2': 3 }
{ a: 1 }
*/