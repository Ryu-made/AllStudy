function sum() {
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  // 배열 객체에 대해서는 27장에서 다룰 예정
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum());
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15