function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // 인수의 타입을 비교해 임의로 에러를 발생시키기
    throw new TypeError('인수는 모두 숫자값으로 입력해주세요.');
  }
  return x + y;
}

console.log(add(2)); // TypeError: 인수는 모두 숫자값으로 입력해주세요.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자값으로 입력해주세요.