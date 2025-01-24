// 배열에서는 for ... in 문 대신에 Array.prototype.forEach 메소드를 사용한다.
// (forEach가 프로토타입 메소드인 것은 생성된 배열 객체가 상속받을 메소드라는 것이다.)

const arr = [1, 2, 3];
arr.x = 20;

// 추가한 프로퍼티 x의 값도 출력된다.
for (const i in arr) {
  console.log(arr[i]); // 1 2 3 20
}

// arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

// forEach 메소드는 요소가 아닌 프로퍼티(x)는 제외한다.
arr.forEach(v => console.log(v)); // 1 2 3

// for ... of 문은 선언한 변수에 키가 아닌 '값을 할당'한다.
for (const value of arr) {
  console.log(value); // 1 2 3
}