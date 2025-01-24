function sumAll() {
  let res = 0;

  // arguments 객체는 유사 배열 객체이므로 for 문으로 순회 가능
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sumAll()); // 0
console.log(sumAll(1)); // 1
console.log(sumAll(1, 3)); // 4
console.log(sumAll(1, 3, 5)); // 9