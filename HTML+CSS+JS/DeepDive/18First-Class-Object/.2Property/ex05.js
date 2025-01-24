function multiply(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메소드를 호출해서 이터러블 객체 arguments를 순회함.
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: 5, done: false }
  console.log(iterator.next()); // { value: 9, done: false }
  console.log(iterator.next()); // { value: undefined, done: false }

  return x * y;
}

let res = multiply(2, 3, 5, 9);
console.log(res); // 6